package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Assignee;
import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueLabel;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.domain.Reply;
import codesquad.issuetracker.dto.issue.form.IssueCreateForm;
import codesquad.issuetracker.dto.issue.IssueDto;
import codesquad.issuetracker.dto.issue.IssueDtos;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import codesquad.issuetracker.dto.issue.form.IssueStatusUpdateForm;
import codesquad.issuetracker.repository.AssigneeRepository;
import codesquad.issuetracker.repository.IssueLabelRepository;
import codesquad.issuetracker.repository.IssueRepository;
import codesquad.issuetracker.repository.LabelRepository;
import codesquad.issuetracker.repository.MemberRepository;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueService {

    private final MilestoneService milestoneService;
    private final LabelService labelService;
    private final MemberService memberService;

    private final IssueRepository issueRepository;
    private final MemberRepository memberRepository;
    private final LabelRepository labelRepository;
    private final IssueLabelRepository issueLabelRepository;
    private final AssigneeRepository assigneeRepository;

    public IssueDtos getIssuesByCriteria(IssueSearchCondition condition) {
        Set<String> labelConditions = condition.parseLabelConditions();
        Set<String> exclusionConditions = condition.parseExclusionConditions();
        List<Issue> issues = issueRepository.search(condition, labelConditions,
            exclusionConditions);

        List<IssueDto> selectedIssues = issues
            .stream()
            .filter(issue -> issue.hasSameStatus(condition.getStatus()))
            .map(IssueDto::from)
            .collect(Collectors.toList());

        long totalCount = issues.size();
        long opened = countOpened(totalCount, selectedIssues.size(), condition.isOpenStatus());

        return new IssueDtos(opened, totalCount - opened, selectedIssues);
    }

    private long countOpened(long totalCount, long countOfSelectedIssues, boolean isOpenStatus) {
        if (isOpenStatus) {
            return countOfSelectedIssues;
        }

        return totalCount - countOfSelectedIssues;
    }

    public IssueDto getIssueDtoById(Long id) {
        Issue issue = getIssueByIdOrThrow(id);

        return IssueDto.from(issue);
    }

    public Issue getIssueByIdOrThrow(Long id) {
        return issueRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 이슈입니다.");
        });
    }

    @Transactional
    public IssueDto createIssue(IssueCreateForm form) {
        Member writer = memberService.getMemberByIdOrThrow(form.getWriterId());

        Long milestoneId = form.getMilestoneId();
        Milestone milestone = milestoneId == null ? null : milestoneService.getMilestoneByIdOrThrow(milestoneId);
        Issue issue = Issue.of(writer, milestone, form.getSubject(), IssueStatus.OPEN);

        Reply reply = Reply.of(issue, writer, form.getComment());
        issue.addReply(reply);

        List<Long> assigneeIds = form.getAssigneeIds();
        for (Long assigneeId : assigneeIds) {
            issue.addAssignee(Assignee.of(issue, memberService.getMemberByIdOrThrow(assigneeId)));
        }

        List<Long> labelIds = form.getLabelIds();
        for (Long labelId : labelIds) {
            issue.addIssueLabel(IssueLabel.of(issue, labelService.getLabelByIdOrThrow(labelId)));
        }

        issueRepository.save(issue);

        return IssueDto.from(issue);
    }

    @Transactional
    public void updateStatusOfIssue(IssueStatusUpdateForm form) {
        List<Issue> issues = issueRepository.findAllById(form.getIdOfIssues());
        IssueStatus updatedStatus = form.getUpdatedStatus();
        issues.forEach(issue -> issue.updateStatus(updatedStatus));
    }

    @Transactional
    public void updateSubjectOfIssue(Long id, String subject) {
        Issue issue = getIssueByIdOrThrow(id);

        issue.updateSubject(subject);
    }

    @Transactional
    public void updateMilestoneOfIssue(Long id, Long milestoneId) {
        Issue issue = getIssueByIdOrThrow(id);

        if (milestoneId == null) {
            issue.updateMilestone(null);
            return;
        }

        Milestone milestone = milestoneService.getMilestoneByIdOrThrow(milestoneId);

        issue.updateMilestone(milestone);
    }

    @Transactional
    public void updateLabelsOfIssue(Long id, List<Long> ids) {
        Issue issue = getIssueByIdOrThrow(id);
        issueLabelRepository.deleteByIssueId(issue.getId());

        if (ids.size() == 0) {
            return;
        }

        labelRepository.findAllById(ids)
            .forEach(label -> issue.addIssueLabel(IssueLabel.of(issue, label)));
    }

    @Transactional
    public void updateAssigneeOfIssue(Long id, List<Long> ids) {
        Issue issue = getIssueByIdOrThrow(id);
        assigneeRepository.deleteByIssueId(issue.getId());

        if (ids.size() == 0) {
            return;
        }

        memberRepository.findAllById(ids)
            .forEach(member -> issue.addAssignee(Assignee.of(issue, member)));
    }

    @Transactional
    public void delete(Long id) {
        issueRepository.deleteById(id);
    }
}

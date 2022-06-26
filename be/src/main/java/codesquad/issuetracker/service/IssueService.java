package codesquad.issuetracker.service;

import static org.springframework.util.StringUtils.hasText;

import codesquad.issuetracker.domain.Assignee;
import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueLabel;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.Label;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.domain.Reply;
import codesquad.issuetracker.dto.issue.IssueCreateForm;
import codesquad.issuetracker.dto.issue.IssueDto;
import codesquad.issuetracker.dto.issue.IssueDtos;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import codesquad.issuetracker.dto.issue.IssueStatusUpdateForm;
import codesquad.issuetracker.repository.IssueRepository;
import codesquad.issuetracker.repository.LabelRepository;
import codesquad.issuetracker.repository.MemberRepository;
import codesquad.issuetracker.repository.MilestoneRepository;
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

    private final IssueRepository issueRepository;
    private final MemberRepository memberRepository;
    private final MilestoneRepository milestoneRepository;
    private final LabelRepository labelRepository;

    public IssueDtos getIssuesByCriteria(IssueSearchCondition condition) {
        Set<String> labelConditions = condition.parseLabelConditions();
        Set<String> exclusionConditions = condition.parseExclusionConditions();
        List<Issue> issues = issueRepository.search(condition, labelConditions, exclusionConditions);

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

    public IssueDto getIssueById(Long id) {
        Issue issue = issueRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 이슈입니다.");
        });
        return IssueDto.from(issue);
    }

    @Transactional
    public IssueDto create(IssueCreateForm form) {
        Member writer = getMemberById(form.getWriterId());
        Milestone milestone = getMilestoneById(form.getMilestoneId());
        Issue issue = Issue.createIssue(writer, milestone, form.getSubject(), IssueStatus.OPEN);

        String comment = form.getComment();
        if (hasText(comment)) {
            Reply reply = Reply.createReply(issue, writer, comment);
            issue.addReply(reply);
        }

        List<Long> assigneeIds = form.getAssigneeIds();
        for (Long assigneeId : assigneeIds) {
            issue.addAssignee(Assignee.createAssignee(issue, getMemberById(assigneeId)));
        }

        List<Long> labelIds = form.getLabelIds();
        for (Long labelId : labelIds) {
            issue.addIssueLabel(IssueLabel.createIssueLabel(issue, getLabelById(labelId)));
        }

        issueRepository.save(issue);

        return IssueDto.from(issue);
    }

    private Member getMemberById(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 회원입니다.");
        });

        return member;
    }

    private Milestone getMilestoneById(Long milestoneId) {
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 마일스톤입니다.");
        });

        return milestone;
    }

    private Label getLabelById(Long labelId) {
        Label label = labelRepository.findById(labelId).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 라벨입니다.");
        });

        return label;
    }

    @Transactional
    public void updateStatus(IssueStatusUpdateForm form) {
        issueRepository.updateStatusOfIssues(form.getUpdatedStatus(), form.getIdOfIssues());
    }

    @Transactional
    public void updateSubject(Long id, String subject) {
        Issue issue = issueRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 이슈입니다.");
        });

        issue.updateSubject(subject);
    }

    @Transactional
    public void delete(Long id) {
        issueRepository.deleteById(id);
    }
}

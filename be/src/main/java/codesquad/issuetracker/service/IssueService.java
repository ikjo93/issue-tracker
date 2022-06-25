package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.dto.issue.IssueDto;
import codesquad.issuetracker.dto.issue.IssueDtos;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import codesquad.issuetracker.dto.issue.IssueStatusUpdateForm;
import codesquad.issuetracker.repository.IssueRepository;
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

    @Transactional
    public void updateStatusByIssueId(IssueStatusUpdateForm updateForm) {
        issueRepository.update(updateForm.getUpdatedStatus(), updateForm.getIdOfIssues());
    }
}

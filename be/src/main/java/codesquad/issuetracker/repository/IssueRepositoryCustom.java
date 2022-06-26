package codesquad.issuetracker.repository;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import java.util.List;
import java.util.Set;

public interface IssueRepositoryCustom {

    List<Issue> search(IssueSearchCondition condition, Set<String> labelConditions, Set<String> exclusionConditions);

    void update(IssueStatus updatedStatus, List<Long> idOfIssues);

}

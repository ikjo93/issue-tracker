package codesquad.issuetracker.dto.milestone;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.Milestone;
import java.time.LocalDate;
import java.util.List;
import lombok.Getter;

@Getter
public class MilestoneDto {

    private Long id;
    private String subject;
    private String description;
    private LocalDate endTime;
    private Long totalCountOfIssues;
    private Long countOfOpenIssues;

    private MilestoneDto() {}

    public MilestoneDto(Long id, String subject, String description,
        LocalDate endTime, Long totalCountOfIssues, Long countOfOpenIssues) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.endTime = endTime;
        this.totalCountOfIssues = totalCountOfIssues;
        this.countOfOpenIssues = countOfOpenIssues;
    }

    public static MilestoneDto from(Milestone milestone) {
        List<Issue> issues = milestone.getIssues();
        long totalCountOfIssues = 0, countOfOpenIssues = 0;
        if (issues != null) {
            totalCountOfIssues = issues.size();
            countOfOpenIssues = issues
                .stream()
                .filter(issue -> issue.hasSameStatus(IssueStatus.OPEN))
                .count();
        }

        return new MilestoneDto(milestone.getId(), milestone.getSubject(),
            milestone.getDescription(), milestone.getEndDate(), totalCountOfIssues, countOfOpenIssues);
    }
}

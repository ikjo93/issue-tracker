package codesquad.issuetracker.dto.issue.form;

import codesquad.issuetracker.domain.IssueStatus;
import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class IssueStatusUpdateForm {

    @NotNull
    private IssueStatus updatedStatus;
    @NotNull
    private List<Long> idOfIssues;

}

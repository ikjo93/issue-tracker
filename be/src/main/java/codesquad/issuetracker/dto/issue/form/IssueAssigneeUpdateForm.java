package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class IssueAssigneeUpdateForm {

    @NotNull
    private List<Long> assignees;

}

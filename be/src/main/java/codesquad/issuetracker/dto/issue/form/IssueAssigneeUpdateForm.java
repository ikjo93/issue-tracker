package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueAssigneeUpdateForm {

    private List<Long> assignees;

}

package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueCreateForm {

    private String subject;
    private Long writerId;
    private List<Long> assigneeIds;
    private List<Long> labelIds;
    private Long milestoneId;
    private String comment;
}

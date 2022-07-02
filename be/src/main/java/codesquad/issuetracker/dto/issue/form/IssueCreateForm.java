package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class IssueCreateForm {

    @NotBlank
    private String subject;
    @NotNull
    private Long writerId;
    @NotNull
    private List<Long> assigneeIds;
    @NotNull
    private List<Long> labelIds;
    private Long milestoneId;
    @NotBlank
    private String comment;
}

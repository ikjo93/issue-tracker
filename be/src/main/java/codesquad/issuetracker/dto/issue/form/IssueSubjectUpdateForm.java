package codesquad.issuetracker.dto.issue.form;

import javax.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class IssueSubjectUpdateForm {

    @NotBlank
    private String subject;

}

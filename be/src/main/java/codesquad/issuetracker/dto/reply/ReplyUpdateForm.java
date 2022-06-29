package codesquad.issuetracker.dto.reply;

import javax.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class ReplyUpdateForm {

    @NotBlank
    private String comment;

}

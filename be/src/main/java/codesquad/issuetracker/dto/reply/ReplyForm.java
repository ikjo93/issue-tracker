package codesquad.issuetracker.dto.reply;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class ReplyForm {

    @NotNull
    private Long writerId;
    @NotBlank
    private String comment;

}

package codesquad.issuetracker.dto.reply;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import javax.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class ReplyForm {

    @JsonFormat(shape = Shape.NUMBER_INT)
    private Long writerId;
    @NotBlank
    private String comment;

}

package codesquad.issuetracker.dto.issue.form;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class IssueMilestoneUpdateForm {

    @JsonFormat(shape = Shape.NUMBER_INT)
    @NotNull
    private Long milestoneId;

}

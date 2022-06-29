package codesquad.issuetracker.dto.issue.form;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Getter;

@Getter
public class IssueMilestoneUpdateForm {

    @JsonFormat(shape = Shape.NUMBER_INT)
    private Long milestoneId;

}

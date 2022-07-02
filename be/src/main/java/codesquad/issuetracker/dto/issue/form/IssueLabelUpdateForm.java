package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class IssueLabelUpdateForm {

    @NotNull
    private List<Long> labels;

}

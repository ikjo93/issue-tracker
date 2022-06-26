package codesquad.issuetracker.dto.issue.form;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueLabelUpdateForm {

    private List<Long> labels;

}

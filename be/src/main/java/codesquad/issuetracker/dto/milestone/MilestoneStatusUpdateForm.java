package codesquad.issuetracker.dto.milestone;

import codesquad.issuetracker.domain.MilestoneStatus;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class MilestoneStatusUpdateForm {

    @NotNull
    private MilestoneStatus updatedStatus;

}

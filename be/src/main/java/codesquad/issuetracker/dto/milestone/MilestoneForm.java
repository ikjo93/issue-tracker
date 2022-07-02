package codesquad.issuetracker.dto.milestone;

import java.time.LocalDate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class MilestoneForm {

    @NotBlank
    private String subject;
    @NotBlank
    private String description;
    @NotNull
    private LocalDate endDate;
}

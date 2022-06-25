package codesquad.issuetracker.dto.milestone;

import java.time.LocalDate;
import lombok.Getter;

@Getter
public class MilestoneForm {

    private String subject;
    private String description;
    private LocalDate endDate;
}

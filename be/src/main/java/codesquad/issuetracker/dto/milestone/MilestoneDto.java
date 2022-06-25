package codesquad.issuetracker.dto.milestone;

import codesquad.issuetracker.domain.Milestone;
import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDate;
import lombok.Getter;

@Getter
public class MilestoneDto {

    private Long id;
    private String subject;
    private String description;
    private LocalDate endTime;

    private MilestoneDto() {}

    @QueryProjection
    public MilestoneDto(Long id, String subject, String description, LocalDate endTime) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.endTime = endTime;
    }

    public static MilestoneDto from(Milestone milestone) {
        return new MilestoneDto(milestone.getId(), milestone.getSubject(),
                milestone.getDescription(), milestone.getEndDate());
    }
}

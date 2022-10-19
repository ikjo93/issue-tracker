package codesquad.issuetracker.dto.milestone;

import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestoneDtos {

    private Long countOfOpenMilestones;
    private Long countOfClosedMilestones;

    private List<MilestoneDto> milestones;

    public MilestoneDtos(Long countOfOpenMilestones, Long countOfClosedMilestones, List<MilestoneDto> milestones) {
        this.countOfOpenMilestones = countOfOpenMilestones;
        this.countOfClosedMilestones = countOfClosedMilestones;
        this.milestones = milestones;
    }
}

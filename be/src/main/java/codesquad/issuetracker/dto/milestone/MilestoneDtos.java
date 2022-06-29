package codesquad.issuetracker.dto.milestone;

import java.util.List;
import lombok.Getter;

@Getter
public class MilestoneDtos {

    private Long countOfOpenMilestones;
    private Long countOfClosedMilestones;

    private List<MilestoneDto> milestones;

    private MilestoneDtos() {}

    public MilestoneDtos(Long countOfOpenMilestones, Long countOfClosedMilestones, List<MilestoneDto> milestones) {
        this.countOfOpenMilestones = countOfOpenMilestones;
        this.countOfClosedMilestones = countOfClosedMilestones;
        this.milestones = milestones;
    }
}

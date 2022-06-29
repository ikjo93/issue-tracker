package codesquad.issuetracker.dto.label;

import java.util.List;
import lombok.Getter;

@Getter
public class LabelDtos {

    private List<LabelDto> labels;

    private LabelDtos() {}

    public LabelDtos(List<LabelDto> labels) {
        this.labels = labels;
    }
}

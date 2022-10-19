package codesquad.issuetracker.dto.label;

import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelDtos {

    private List<LabelDto> labels;

    public LabelDtos(List<LabelDto> labels) {
        this.labels = labels;
    }
}

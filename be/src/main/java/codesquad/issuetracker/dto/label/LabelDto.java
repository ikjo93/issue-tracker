package codesquad.issuetracker.dto.label;

import codesquad.issuetracker.domain.Label;
import com.querydsl.core.annotations.QueryProjection;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelDto {

    private Long id;
    private String name;
    private String description;
    private String color;
    private boolean isDarkText;

    public LabelDto(Long id, String name, String description, String color, boolean isDarkText) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.isDarkText = isDarkText;
    }

    public static LabelDto from(Label label) {
        return new LabelDto(label.getId(), label.getName(), label.getDescription(),
                label.getColor(), label.isDarkText());
    }
}

package codesquad.issuetracker.dto.label;

import lombok.Getter;

@Getter
public class LabelForm {

    private String name;
    private String description;
    private String color;
    private boolean isDarkText;
}

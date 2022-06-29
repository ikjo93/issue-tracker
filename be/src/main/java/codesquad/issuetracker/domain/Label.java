package codesquad.issuetracker.domain;

import codesquad.issuetracker.dto.label.LabelForm;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "label")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "label_id")
    private Long id;

    @OneToMany(mappedBy = "label", cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private String name;
    private String description;
    private String color;

    @Column(name = "dark_text_flag")
    private boolean isDarkText;

    private Label(String name, String description, String color, boolean isDarkText) {
        this.name = name;
        this.description = description;
        this.color = color;
        this.isDarkText = isDarkText;
    }

    public void updateInfo(LabelForm form) {
        this.name = form.getName();
        this.description = form.getDescription();
        this.color = form.getColor();
        this.isDarkText = form.isDarkText();
    }

    public static Label createLabel(LabelForm form) {
        return new Label(form.getName(), form.getDescription(), form.getColor(), form.isDarkText());
    }
}

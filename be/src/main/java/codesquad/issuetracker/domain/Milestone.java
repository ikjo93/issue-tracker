package codesquad.issuetracker.domain;

import codesquad.issuetracker.dto.milestone.MilestoneForm;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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
@Table(name = "milestone")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private Long id;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues = new ArrayList<>();

    private String subject;
    private String description;
    private LocalDate endDate;

    public Milestone(String subject, String description, LocalDate endDate) {
        this.subject = subject;
        this.description = description;
        this.endDate = endDate;
    }

    public static Milestone createMilestone(MilestoneForm form) {
        return new Milestone(form.getSubject(), form.getDescription(), form.getEndDate());
    }

    public void updateInfo(MilestoneForm form) {
        this.subject = form.getSubject();
        this.description = form.getDescription();
        this.endDate = form.getEndDate();
    }
}

package codesquad.issuetracker.domain;

import codesquad.issuetracker.dto.milestone.MilestoneForm;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

    @Enumerated(EnumType.STRING)
    private MilestoneStatus status;

    private Milestone(String subject, String description, LocalDate endDate,
        MilestoneStatus status) {
        this.subject = subject;
        this.description = description;
        this.endDate = endDate;
        this.status = status;
    }

    public static Milestone of(MilestoneForm form) {
        return new Milestone(form.getSubject(), form.getDescription(), form.getEndDate(), MilestoneStatus.OPEN);
    }

    public void updateInfo(MilestoneForm form) {
        this.subject = form.getSubject();
        this.description = form.getDescription();
        this.endDate = form.getEndDate();
    }

    public void updateStatus(MilestoneStatus status) {
        this.status = status;
    }

    public boolean hasSameStatus(MilestoneStatus status) {
        return this.status.equals(status);
    }
}

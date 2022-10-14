package codesquad.issuetracker.domain;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import javax.persistence.CascadeType;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "issue")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "issue_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @NotNull
    private Member writer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private Set<Reply> replies = new HashSet<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private Set<Assignee> assignees = new HashSet<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private Set<IssueLabel> issueLabels = new HashSet<>();

    private String subject;

    @Enumerated(EnumType.STRING)
    private IssueStatus status;

    private Issue(Member writer, Milestone milestone, String subject, IssueStatus status) {
        this.writer = writer;
        this.milestone = milestone;
        this.subject = subject;
        this.status = status;
    }

    public static Issue of(Member writer, Milestone milestone, String subject) {
        return new Issue(writer, milestone, subject, IssueStatus.OPEN);
    }

    public boolean hasSameStatus(IssueStatus status) {
        return this.status.equals(status);
    }

    public List<Member> assignees() {
        return assignees
            .stream()
            .map(Assignee::getMember)
            .collect(Collectors.toList());
    }

    public List<Label> labels() {
        return issueLabels
            .stream()
            .map(IssueLabel::getLabel)
            .collect(Collectors.toList());
    }

    public void addReply(Reply reply) {
        this.replies.add(reply);
    }

    public void addAssignee(Assignee assignee) {
        this.assignees.add(assignee);
    }

    public void addIssueLabel(IssueLabel issueLabel) {
        this.issueLabels.add(issueLabel);
    }

    public void updateStatus(IssueStatus status) {
        this.status = status;
    }

    public void updateSubject(String subject) {
        this.subject = subject;
    }

    public void updateMilestone(Milestone milestone) {
        this.milestone = milestone;
    }
}

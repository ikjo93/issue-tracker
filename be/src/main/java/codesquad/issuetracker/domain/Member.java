package codesquad.issuetracker.domain;

import codesquad.issuetracker.dto.auth.AuthMemberInformation;
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
@Table(name = "member")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private MemberType type;

    private String identity;
    private String email;
    private String name;
    private String profileUrl;

    @OneToMany(mappedBy = "writer")
    private List<Issue> issues = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Reply> replies = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Assignee> assignees = new ArrayList<>();

    private Member(MemberType type, String identity, String email, String name,
        String profileUrl) {
        this.type = type;
        this.identity = identity;
        this.email = email;
        this.name = name;
        this.profileUrl = profileUrl;
    }

    public static Member of(AuthMemberInformation info) {
        return new Member(MemberType.GITHUB, info.getIdentity(), info.getEmail(),
            info.getName(), info.getProfileUrl());
    }
}

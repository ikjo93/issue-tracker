package codesquad.issuetracker.dto.member;

import codesquad.issuetracker.domain.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MemberDto {

    private Long id;
    private String identity;
    private String nickname;
    private String profileUrl;

    public MemberDto(Long id, String identity, String nickname, String profileUrl) {
        this.id = id;
        this.identity = identity;
        this.nickname = nickname;
        this.profileUrl = profileUrl;
    }

    public static MemberDto from(Member member) {
        return new MemberDto(member.getId(), member.getIdentity(), member.getName(),
                member.getProfileUrl());
    }
}

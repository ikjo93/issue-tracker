package codesquad.issuetracker.dto.member;

import codesquad.issuetracker.domain.Member;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;

@Getter
public class MemberDtos {

    private List<MemberDto> members;

    private MemberDtos() {}

    public MemberDtos(List<MemberDto> members) {
        this.members = members;
    }

    public static List<MemberDto> from(List<Member> members) {
        return members.stream().map(MemberDto::from).collect(Collectors.toList());
    }
}

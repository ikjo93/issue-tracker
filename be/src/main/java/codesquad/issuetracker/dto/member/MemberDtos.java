package codesquad.issuetracker.dto.member;

import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MemberDtos {

    private List<MemberDto> members;

    public MemberDtos(List<MemberDto> members) {
        this.members = members;
    }
}

package codesquad.issuetracker.dto.reply;

import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Reply;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ReplyDto {

    private Long id;
    private String writer;
    private String comment;
    private String profileUrl;
    private LocalDateTime createdDateTime;

    public static ReplyDto from(Reply reply) {
        Member member = reply.getMember();
        return new ReplyDto(reply.getId(), member.getIdentity(), reply.getComment(),
            member.getProfileUrl(), reply.getCreatedDateTime());
    }
}

package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Reply;
import codesquad.issuetracker.dto.reply.ReplyDto;
import codesquad.issuetracker.dto.reply.ReplyForm;
import codesquad.issuetracker.dto.reply.ReplyUpdateForm;
import codesquad.issuetracker.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReplyService {

    private final IssueService issueService;
    private final MemberService memberService;

    private final ReplyRepository replyRepository;

    public Reply getReplyByIdOrThrow(Long id) {
        return replyRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 댓글입니다.");
        });
    }

    @Transactional
    public ReplyDto createReply(Long issueId, ReplyForm form) {
        Issue issue = issueService.getIssueByIdOrThrow(issueId);
        Member member = memberService.getMemberByIdOrThrow(form.getWriterId());
        Reply reply = Reply.of(issue, member, form.getComment());

        replyRepository.save(reply);

        return ReplyDto.from(reply);
    }

    @Transactional
    public void updateReply(Long replyId, ReplyUpdateForm form) {
        Reply reply = getReplyByIdOrThrow(replyId);
        reply.updateComment(form.getComment());
    }
}

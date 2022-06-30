package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Reply;
import codesquad.issuetracker.dto.reply.ReplyDto;
import codesquad.issuetracker.dto.reply.ReplyForm;
import codesquad.issuetracker.dto.reply.ReplyUpdateForm;
import codesquad.issuetracker.repository.IssueRepository;
import codesquad.issuetracker.repository.MemberRepository;
import codesquad.issuetracker.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReplyService {

    private final IssueRepository issueRepository;
    private final MemberRepository memberRepository;
    private final ReplyRepository replyRepository;

    @Transactional
    public ReplyDto createReply(Long issueId, ReplyForm form) {
        Issue issue = getIssueById(issueId);
        Member member = getMemberById(form.getWriterId());
        Reply reply = Reply.of(issue, member, form.getComment());

        replyRepository.save(reply);

        return ReplyDto.from(reply);
    }

    @Transactional
    public void updateReply(Long replyId, ReplyUpdateForm form) {
        Reply reply = getReplyById(replyId);
        reply.updateComment(form.getComment());
    }

    private Issue getIssueById(Long id) {
        return issueRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 이슈입니다.");
        });
    }

    private Member getMemberById(Long id) {
        return memberRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 회원입니다.");
        });
    }

    private Reply getReplyById(Long id) {
        return replyRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 댓글입니다.");
        });
    }

}

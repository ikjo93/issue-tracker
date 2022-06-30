package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.dto.reply.ReplyDto;
import codesquad.issuetracker.dto.reply.ReplyForm;
import codesquad.issuetracker.dto.reply.ReplyUpdateForm;
import codesquad.issuetracker.service.ReplyService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReplyController {

    private final ReplyService replyService;

    @PostMapping("/api/issues/{id}/replies")
    public ReplyDto reply(@PathVariable Long id, @Valid @RequestBody ReplyForm form) {
        return replyService.createReply(id, form);
    }

    @PatchMapping("/api/issues/replies/{id}")
    public ResponseMessage update(@PathVariable("id") Long replyId, @Valid @RequestBody ReplyUpdateForm form) {
        replyService.updateReply(replyId, form);
        return new ResponseMessage(HttpStatus.OK, "댓글 편집이 정상적으로 처리되었습니다.");
    }
}

package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.dto.issue.IssueDto;
import codesquad.issuetracker.dto.issue.IssueDtos;
import codesquad.issuetracker.dto.issue.form.IssueCreateForm;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import codesquad.issuetracker.dto.issue.form.IssueLabelUpdateForm;
import codesquad.issuetracker.dto.issue.form.IssueMilestoneUpdateForm;
import codesquad.issuetracker.dto.issue.form.IssueStatusUpdateForm;
import codesquad.issuetracker.dto.issue.form.IssueSubjectUpdateForm;
import codesquad.issuetracker.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @GetMapping("/api/issues")
    public IssueDtos issues(IssueSearchCondition condition) {
        return issueService.getIssuesByCriteria(condition);
    }

    @GetMapping("/api/issues/{id}")
    public IssueDto issue(@PathVariable Long id) {
        return issueService.getIssueDtoById(id);
    }

    @PostMapping("/api/issues")
    public IssueDto create(@RequestBody IssueCreateForm form) {
        return issueService.create(form);
    }

    @PatchMapping("/api/issues/status/update")
    public ResponseMessage updateStatus(@RequestBody IssueStatusUpdateForm form) {
        issueService.updateStatus(form);
        return new ResponseMessage(HttpStatus.OK, "이슈의 상태 변경이 정상적으로 처리되었습니다.");
    }

    @PatchMapping("/api/issues/{id}/subject/update")
    public ResponseMessage updateSubject(@PathVariable Long id, @RequestBody IssueSubjectUpdateForm form) {
        issueService.updateSubject(id, form.getSubject());
        return new ResponseMessage(HttpStatus.OK, "이슈의 제목 편집이 정상적으로 처리되었습니다.");
    }

    @PatchMapping("/api/issues/{id}/milestone/update")
    public ResponseMessage updateMilestone(@PathVariable Long id, @RequestBody IssueMilestoneUpdateForm form) {
        issueService.updateMilestone(id, form.getMilestoneId());
        return new ResponseMessage(HttpStatus.OK, "이슈의 마일스톤 수정이 정상적으로 처리되었습니다.");
    }

    @PatchMapping("/api/issues/{id}/labels/update")
    public ResponseMessage updateLabels(@PathVariable Long id, @RequestBody IssueLabelUpdateForm form) {
        issueService.updateLabels(id, form.getLabels());
        return new ResponseMessage(HttpStatus.OK, "이슈의 라벨 수정이 정상적으로 처리되었습니다.");
    }

    @DeleteMapping("/api/issues/{id}")
    public ResponseMessage delete(@PathVariable Long id) {
        issueService.delete(id);
        return new ResponseMessage(HttpStatus.OK, "이슈 삭제가 정상적으로 처리되었습니다.");
    }
}

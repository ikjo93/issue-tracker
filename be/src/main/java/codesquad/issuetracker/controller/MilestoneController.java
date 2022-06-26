package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.dto.milestone.MilestoneDto;
import codesquad.issuetracker.dto.milestone.MilestoneDtos;
import codesquad.issuetracker.dto.milestone.MilestoneForm;
import codesquad.issuetracker.service.MilestoneService;
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
public class MilestoneController {

    private final MilestoneService milestoneService;

    @GetMapping("/api/milestones")
    public MilestoneDtos milestones() {
        return milestoneService.getMilestones();
    }

    @PostMapping("/api/milestones")
    public MilestoneDto create(@RequestBody MilestoneForm form) {
        return milestoneService.save(form);
    }

    @DeleteMapping("/api/milestones/{id}")
    public ResponseMessage delete(@PathVariable Long id) {
        milestoneService.delete(id);
        return new ResponseMessage(HttpStatus.OK, "정상적으로 삭제 처리되었습니다.");
    }

    @PatchMapping("/api/milestones/{id}")
    public MilestoneDto update(@PathVariable Long id, @RequestBody MilestoneForm form) {
        return milestoneService.update(id, form);
    }
}

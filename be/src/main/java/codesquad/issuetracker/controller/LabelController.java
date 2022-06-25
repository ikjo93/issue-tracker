package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.dto.label.LabelForm;
import codesquad.issuetracker.dto.label.LabelDto;
import codesquad.issuetracker.dto.label.LabelDtos;
import codesquad.issuetracker.service.LabelService;
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
public class LabelController {

    private final LabelService labelService;

    @GetMapping("/api/labels")
    public LabelDtos labels() {
        return labelService.getLabels();
    }

    @PostMapping("/api/labels")
    public LabelDto create(@RequestBody LabelForm form) {
        return labelService.save(form);
    }

    @DeleteMapping("/api/labels/{id}")
    public ResponseMessage delete(@PathVariable Long id) {
        labelService.delete(id);
        return new ResponseMessage(HttpStatus.OK, "정상적으로 삭제 처리되었습니다.");
    }

    @PatchMapping("/api/labels/{id}")
    public ResponseMessage update(@PathVariable Long id, @RequestBody LabelForm form) {
        labelService.update(id, form);
        return new ResponseMessage(HttpStatus.OK, "정상적으로 편집 처리되었습니다.");
    }
}

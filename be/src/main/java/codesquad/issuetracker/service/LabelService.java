package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Label;
import codesquad.issuetracker.dto.label.LabelForm;
import codesquad.issuetracker.dto.label.LabelDto;
import codesquad.issuetracker.dto.label.LabelDtos;
import codesquad.issuetracker.repository.LabelRepository;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelDtos getLabels() {
        return new LabelDtos(labelRepository.findAll()
            .stream()
            .map(LabelDto::from)
            .collect(Collectors.toList()));
    }

    @Transactional
    public LabelDto save(LabelForm form) {
        Label label = Label.builder()
            .name(form.getName())
            .description(form.getDescription())
            .color(form.getColor())
            .isDarkText(form.isDarkText())
            .build();

        return LabelDto.from(labelRepository.save(label));
    }

    @Transactional
    public void delete(Long id) {
        labelRepository.deleteById(id);
    }

    @Transactional
    public void update(Long id, LabelForm form) {
        Label label = labelRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 라벨입니다.");
        });

        label.updateInfo(form);
    }
}

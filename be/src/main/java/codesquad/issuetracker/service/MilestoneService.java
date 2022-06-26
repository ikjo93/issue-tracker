package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.dto.milestone.MilestoneDto;
import codesquad.issuetracker.dto.milestone.MilestoneDtos;
import codesquad.issuetracker.dto.milestone.MilestoneForm;
import codesquad.issuetracker.repository.MilestoneRepository;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public MilestoneDtos getMilestones() {
        return new MilestoneDtos(
            milestoneRepository.findAll()
                .stream()
                .map(MilestoneDto::from)
                .collect(Collectors.toList())
        );
    }

    @Transactional
    public MilestoneDto save(MilestoneForm form) {
        return MilestoneDto.from(milestoneRepository.save(Milestone.createMilestone(form)));
    }

    @Transactional
    public void delete(Long id) {
        Milestone milestone = milestoneRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 마일스톤입니다.");
        });

        milestone.getIssues().forEach(issue -> issue.updateMilestone(null));

        milestoneRepository.deleteById(id);
    }

    @Transactional
    public MilestoneDto update(Long id, MilestoneForm form) {
        Milestone milestone = milestoneRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 마일스톤입니다.");
        });

        milestone.updateInfo(form);

        return MilestoneDto.from(milestone);
    }
}

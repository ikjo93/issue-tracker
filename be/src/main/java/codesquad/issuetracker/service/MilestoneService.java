package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.domain.MilestoneStatus;
import codesquad.issuetracker.dto.milestone.MilestoneDto;
import codesquad.issuetracker.dto.milestone.MilestoneDtos;
import codesquad.issuetracker.dto.milestone.MilestoneForm;
import codesquad.issuetracker.repository.MilestoneRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public MilestoneDtos getMilestones(MilestoneStatus status) {
        List<Milestone> milestones = milestoneRepository.findAll();

        List<MilestoneDto> selectedMilestones = milestones.stream()
            .filter(milestone -> milestone.hasSameStatus(status))
            .map(MilestoneDto::from)
            .collect(Collectors.toList());

        long totalCount = milestones.size();
        long opened = countOpened(totalCount, selectedMilestones.size(), status);

        return new MilestoneDtos(opened, totalCount - opened, selectedMilestones);
    }

    private long countOpened(long totalCount, int countOfSelectedMilestones, MilestoneStatus status) {
        if (status.equals(MilestoneStatus.OPEN)) {
            return countOfSelectedMilestones;
        }

        return totalCount - countOfSelectedMilestones;
    }

    public Milestone getMilestoneByIdOrThrow(Long id) {
        return milestoneRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 마일스톤입니다.");
        });
    }

    @Transactional
    public MilestoneDto save(MilestoneForm form) {
        return MilestoneDto.from(milestoneRepository.save(Milestone.of(form)));
    }

    @Transactional
    public void delete(Long id) {
        Milestone milestone = getMilestoneByIdOrThrow(id);

        milestone.getIssues().forEach(issue -> issue.updateMilestone(null));

        milestoneRepository.deleteById(id);
    }

    @Transactional
    public MilestoneDto update(Long id, MilestoneForm form) {
        Milestone milestone = getMilestoneByIdOrThrow(id);

        milestone.updateInfo(form);

        return MilestoneDto.from(milestone);
    }

    @Transactional
    public void updateStatus(Long id, MilestoneStatus status) {
        Milestone milestone = getMilestoneByIdOrThrow(id);

        milestone.updateStatus(status);
    }
}

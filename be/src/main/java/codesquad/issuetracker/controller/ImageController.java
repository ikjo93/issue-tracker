package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.image.ImageResponse;
import codesquad.issuetracker.service.ImageService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping("/api/images")
    public ImageResponse upload(@RequestPart List<MultipartFile> images) {
        return new ImageResponse(imageService.uploadFiles(images));
    }
}

package codesquad.issuetracker.dto.image;

import java.util.List;
import lombok.Getter;

@Getter
public class ImageResponse {

    private final List<String> imageLink;

    public ImageResponse(List<String> imageLink) {
        this.imageLink = imageLink;
    }
}

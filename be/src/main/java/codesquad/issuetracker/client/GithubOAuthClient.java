package codesquad.issuetracker.client;

import codesquad.issuetracker.dto.auth.AuthMemberInformation;
import codesquad.issuetracker.dto.auth.OAuthAccessToken;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class GithubOAuthClient {

    private static final String GITHUB_AUTHORIZATION_SERVER_URL = "https://github.com/login/oauth/access_token";
    private static final String USER_SCOPE = "user";
    private static final String GITHUB_RESOURCE_SERVER_USER_API_URL = "https://api.github.com/" + USER_SCOPE;

    public OAuthAccessToken getAccessToken(String code) {
        return WebClient.create()
            .post()
            .uri(GITHUB_AUTHORIZATION_SERVER_URL)
            .headers(header -> {
                header.setBasicAuth(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"));
                header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
                header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
                header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
            })
            .bodyValue(getPayload(code))
            .retrieve()
            .bodyToMono(OAuthAccessToken.class)
            .block();
    }

    private MultiValueMap<String, String> getPayload(String code) {
        MultiValueMap<String, String> payload = new LinkedMultiValueMap<>();
        payload.set("grant_type", "authorization_code");
        payload.set("code", code);
        return payload;
    }

    public AuthMemberInformation getAuthMemberInfo(OAuthAccessToken token) {
        return WebClient.create()
            .get()
            .uri(GITHUB_RESOURCE_SERVER_USER_API_URL)
            .headers(header -> header.setBearerAuth(token.getAccessToken()))
            .retrieve()
            .bodyToMono(AuthMemberInformation.class)
            .block();
    }
}

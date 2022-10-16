package codesquad.issuetracker.controller;

import codesquad.issuetracker.argumentresolver.Login;
import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.jwt.AccessToken;
import codesquad.issuetracker.jwt.RefreshToken;
import codesquad.issuetracker.jwt.Token;
import codesquad.issuetracker.service.TokenService;
import codesquad.issuetracker.service.GithubOAuthService;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final GithubOAuthService githubOAuthService;
    private final TokenService tokenService;

    @GetMapping("/api/login")
    public ResponseMessage login(HttpServletResponse response, @RequestParam String code) {
        String memberId = String.valueOf(githubOAuthService.authorizeForThirdParty(code));
        Token accessToken = tokenService.createAccessToken(memberId);
        Token refreshToken = tokenService.createRefreshToken(memberId);

        response.addHeader("access-token", accessToken.getToken());
        response.setHeader("Set-Cookie", ResponseCookie
            .from("refresh-token", refreshToken.getToken())
            .path("/api")
            .httpOnly(true)
            .secure(true)
            .sameSite("Strict")
            .build()
            .toString());

        return new ResponseMessage(HttpStatus.OK, "로그인이 정상적으로 처리되었습니다.");
    }

    @PostMapping("/api/access-token/reissue")
    public ResponseMessage reissue(@Login RefreshToken token, HttpServletResponse response) {
        String memberId = tokenService.validateDurationOfRefreshToken(token);
        Token renewedAccessToken = tokenService.createAccessToken(memberId);
        response.addHeader("access-token", renewedAccessToken.getToken());

        return new ResponseMessage(HttpStatus.OK, "access 토큰이 갱신되었습니다.");
    }

    @GetMapping("/api/logout")
    public ResponseMessage logout(@Login AccessToken accessToken, @Login RefreshToken refreshToken) {
        tokenService.invalidateToken(accessToken, refreshToken);

        return new ResponseMessage(HttpStatus.OK, "로그아웃이 처리되었습니다.");
    }
}

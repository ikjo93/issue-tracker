package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.ResponseMessage;
import codesquad.issuetracker.exception.ImageUploadException;
import codesquad.issuetracker.exception.InvalidTokenException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class ExceptionControllerAdvice {

    @ExceptionHandler(InvalidTokenException.class)
    public ResponseEntity<ResponseMessage> handleJwtException(InvalidTokenException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.UNAUTHORIZED, exception.getMessage());
        return new ResponseEntity<>(message, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(EmptyResultDataAccessException.class)
    public ResponseEntity<ResponseMessage> handleEmptyDataException() {
        ResponseMessage message = new ResponseMessage(HttpStatus.NOT_FOUND, "존재하지 않는 정보입니다.");
        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<ResponseMessage> handleIllegalStateException(IllegalStateException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.NOT_FOUND, exception.getMessage());
        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ImageUploadException.class)
    public ResponseEntity<ResponseMessage> handleImageUploadException(ImageUploadException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
        return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

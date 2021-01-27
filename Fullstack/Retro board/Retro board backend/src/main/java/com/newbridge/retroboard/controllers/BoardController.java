package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.dao.entities.Board;
import com.newbridge.retroboard.dto.AddBoardRequest;
import com.newbridge.retroboard.dto.BoardDto;
import com.newbridge.retroboard.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/boards")
    @ResponseStatus(HttpStatus.OK)
    public List<BoardDto> getAllBoards() {
        return boardService.getAllBoards();
    }

    @PostMapping("/board")
    @ResponseStatus(HttpStatus.OK)
    public Board addBoard(@RequestBody AddBoardRequest addBoardRequest){
        return boardService.addBoard(addBoardRequest);
    }
}

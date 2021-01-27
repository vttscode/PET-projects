package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.dao.BoardDao;
import com.newbridge.retroboard.dao.entities.Board;
import com.newbridge.retroboard.dto.AddBoardRequest;
import com.newbridge.retroboard.dto.BoardDto;
import com.newbridge.retroboard.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardDao boardDao;

    private final ModelMapper modelMapper;

    @Override
    public List<BoardDto> getAllBoards() {
        List<Board> boards = boardDao.findAll();
        return boards.stream()
                .map(board -> modelMapper.map(board, BoardDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public Board addBoard(AddBoardRequest addBoardRequest) {
        Board board = modelMapper.map(addBoardRequest,Board.class);
        return boardDao.save(board);
    }
}

package com.privateprj.genshinimpact.service;

import com.privateprj.genshinimpact.model.Board;
import com.privateprj.genshinimpact.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService
{
    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Board writeBoard(Board board) {
        return boardRepository.save(board);
    }

    @Override
    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }
}

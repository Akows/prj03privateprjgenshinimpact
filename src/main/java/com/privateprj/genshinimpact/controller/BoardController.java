package com.privateprj.genshinimpact.controller;

import com.privateprj.genshinimpact.model.Board;
import com.privateprj.genshinimpact.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin
public class BoardController {

    @Autowired
    private BoardService boardService;

    @PostMapping("/write")
    public String memberSignUp(@RequestBody Board board)
    {
        boardService.writeBoard(board);

        return "Write Complete!";
    }

    @GetMapping("/getallboard")
    public List<Board> getAllBoard()
    {
        return boardService.getAllBoard();
    }
}

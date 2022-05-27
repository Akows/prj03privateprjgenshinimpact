package com.privproject.genshinimpectweb.Controller;

import com.privproject.genshinimpectweb.Entity.BoardDto;
import com.privproject.genshinimpectweb.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin
public class BoardController {

    @Autowired
    BoardService boardService;

    @PostMapping("/write")
    public String boardWrite(@RequestBody BoardDto boardDto)
    {
        boardService.boardWrite(boardDto);

        return "Board Write Complete!";
    }

    @GetMapping("/getallboardlist")
    public List<BoardDto> getallboardlist()
    {
        return boardService.getallboardlist();
    }

    @PutMapping("/boarddelete")
    public String boardDelete(@RequestBody BoardDto boardDto)
    {
        boardService.boardDelete(boardDto);

        System.out.println(boardDto);

        return "Board Delete Complete!";
    }
}

package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.BoardDto;

import java.util.List;

public interface BoardService
{
    void boardWrite(BoardDto boardDto);

    public List<BoardDto> getallboardlist();

    public List<BoardDto> getBoardByNumber(BoardDto boardDto);
}

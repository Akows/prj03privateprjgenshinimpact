package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.BoardDto;
import com.privproject.genshinimpectweb.Entity.MemberDto;
import com.privproject.genshinimpectweb.Mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService
{
    @Autowired
    BoardMapper boardMapper;

    @Override
    public void boardWrite(BoardDto boardDto)
    {
        boardMapper.boardWrite(boardDto);
    }

    @Override
    public List<BoardDto> getallboardlist()
    {
        return boardMapper.getallboardlist();
    }

    @Override
    public void boardDelete(BoardDto boardDto)
    {
        boardMapper.boardDelete(boardDto);
    }

}
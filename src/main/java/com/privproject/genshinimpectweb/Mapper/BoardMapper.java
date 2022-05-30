package com.privproject.genshinimpectweb.Mapper;

import com.privproject.genshinimpectweb.Entity.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper
{
    void boardWrite(BoardDto boardDto);

    List<BoardDto> getallboardlist();

    void boardUpdate(BoardDto boardDto);

    void boardDelete(BoardDto boardDto);
}
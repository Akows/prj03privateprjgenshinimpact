package com.privateprj.genshinimpact.service;

import com.privateprj.genshinimpact.model.Board;
import java.util.List;

public interface BoardService
{
    public Board writeBoard(Board board);

    public List<Board> getAllBoard();
}

package com.privateprj.genshinimpact.repository;

import com.privateprj.genshinimpact.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer>
{

}

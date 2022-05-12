package com.privproject.genshinimpectweb.Mapper;

import com.privproject.genshinimpectweb.Entity.MemberDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper
{
    void memberSignUp(MemberDto memberDto);

    List<MemberDto> getAllUserList();
}
package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.MemberDto;

import java.util.List;

public interface MemberService
{
    void memberSignUp(MemberDto memberDto);

    public List<MemberDto> getAllUserList();
}

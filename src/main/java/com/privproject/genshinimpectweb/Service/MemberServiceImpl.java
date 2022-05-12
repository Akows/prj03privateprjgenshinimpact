package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.MemberDto;
import com.privproject.genshinimpectweb.Mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService
{
    @Autowired
    MemberMapper memberMapper;

    @Override
    public void memberSignUp(MemberDto memberDto)
    {
        memberMapper.memberSignUp(memberDto);
    }

    @Override
    public List<MemberDto> getAllUserList()
    {
        return memberMapper.getAllUserList();
    }

}
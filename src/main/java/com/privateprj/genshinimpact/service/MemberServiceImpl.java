package com.privateprj.genshinimpact.service;

import com.privateprj.genshinimpact.model.Member;
import com.privateprj.genshinimpact.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService
{
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member saveMember(Member member)
    {
        return memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers()
    {
        return memberRepository.findAll();
    }
}

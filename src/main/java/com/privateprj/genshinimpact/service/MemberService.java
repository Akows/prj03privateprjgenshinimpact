package com.privateprj.genshinimpact.service;

import com.privateprj.genshinimpact.model.Member;
import java.util.List;

public interface MemberService
{
    public Member saveMember(Member member);

    public List<Member> getAllMembers();
}

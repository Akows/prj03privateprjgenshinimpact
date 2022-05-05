package com.privateprj.genshinimpact.controller;

import com.privateprj.genshinimpact.model.Member;
import com.privateprj.genshinimpact.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController
{
    @Autowired
    private MemberService memberService;

    @PostMapping("/signup")
    public String memberSignUp(@RequestBody Member member)
    {
        memberService.saveMember(member);

        return "Sign-up Complete!";
    }

    @GetMapping("/getallmembers")
    public List<Member> getAllMembers()
    {
        return memberService.getAllMembers();
    }
}

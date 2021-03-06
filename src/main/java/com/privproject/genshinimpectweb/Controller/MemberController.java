package com.privproject.genshinimpectweb.Controller;

import com.privproject.genshinimpectweb.Entity.MemberDto;
import com.privproject.genshinimpectweb.Service.MemberService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@CrossOrigin
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/signup")
    public String MemberSignUp(@RequestBody MemberDto memberDto)
    {
        memberService.memberSignUp(memberDto);

        return "Member Sign-up Complete!";
    }

    @GetMapping("/getalluserlist")
    public List<MemberDto> getAllUserList()
    {
        return memberService.getAllUserList();
    }






    @PostMapping("/connecttest")
    public String test(@RequestBody MemberDto memberDto)
    {
        System.out.println(memberDto);

        return "Connect Complete!";
    }
}

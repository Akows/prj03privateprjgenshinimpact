package com.privproject.genshinimpectweb.Controller;

import com.privproject.genshinimpectweb.Entity.MemberDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController
{
    @PostMapping("/login")
    public String login(@RequestBody MemberDto memberDto)
    {
//        loginsuccess = loginService.getidpwdinfo(memberDto);

        return "";
    }
}

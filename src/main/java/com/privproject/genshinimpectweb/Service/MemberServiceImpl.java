package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.MemberDto;
import com.privproject.genshinimpectweb.Mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService
{
    @Autowired
    private MemberMapper memberMapper;

    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void memberSignUp(MemberDto memberDto)
    {
        String encryptionPwd = passwordEncoder().encode(memberDto.getM_password());
        memberDto.setM_password(encryptionPwd);

        memberMapper.memberSignUp(memberDto);
    }

    @Override
    public List<MemberDto> getAllUserList()
    {
        return memberMapper.getAllUserList();
    }

}
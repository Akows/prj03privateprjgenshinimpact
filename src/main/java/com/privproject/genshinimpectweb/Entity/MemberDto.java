package com.privproject.genshinimpectweb.Entity;

import lombok.Data;

@Data
public class MemberDto
{
    private String m_number_pk;
    private String m_id;
    private String m_password;
    private String m_name;
    private String m_email;
    private String m_grade;
    private String m_point;
}

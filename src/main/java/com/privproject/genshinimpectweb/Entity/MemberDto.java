package com.privproject.genshinimpectweb.Entity;

import lombok.Data;
import java.util.HashSet;
import java.util.Set;

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
    private String m_delete_state;
    private String m_enabled_state;
}

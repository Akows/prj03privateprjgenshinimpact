package com.privproject.genshinimpectweb.Entity;

import lombok.Data;

@Data
public class BoardDto
{
    private int b_number_pk;
    private int m_number_fk;
    private String b_title;
    private String b_content;
    private String b_write_time;
    private String b_delete_state;
    private String b_attach_file_info;
}

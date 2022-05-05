package com.privateprj.genshinimpact.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Member
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int membernumber;
    private String id;
    private String pwd;

}

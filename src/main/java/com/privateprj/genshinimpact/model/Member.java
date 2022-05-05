package com.privateprj.genshinimpact.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Member
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int membernumber;
    private String id;
    private String pwd;

    public Member()
    {

    }

    public int getMembernumber() {
        return membernumber;
    }

    public void setMembernumber(int membernumber) {
        this.membernumber = membernumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}

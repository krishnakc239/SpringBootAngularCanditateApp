package com.edu.mum.candidatesearchapp.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Candidate implements Comparable<Candidate>{
    private String name;
    private String project;
    private int year;
    private String[] skills;


    @Override
    public int compareTo(Candidate o) {
        return o.getYear() - this.year;
    }
}

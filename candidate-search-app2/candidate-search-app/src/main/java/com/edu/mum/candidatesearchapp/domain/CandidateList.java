package com.edu.mum.candidatesearchapp.domain;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CandidateList {
    private String[] skills;
    private List<Candidate> candidates;
}

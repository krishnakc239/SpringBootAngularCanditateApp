export class Candidate {
  name: string;
  project: string;
  year: number;
  skills: string[];
  constructor(){}
}

export interface CandidateList {
  skills: string[];
  candidates: Candidate[];
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidate, CandidateList} from '../model/candidate';

@Injectable({ providedIn: 'root'})
export class CandidateService {
  private baseUri = "//localhost:8080/api/candidate";
  private addUri = this.baseUri + "/add";
  private  getUri = this.baseUri + "/get";

  constructor(private http: HttpClient) {}

  addCandidate(candidate: Candidate): Observable<any>{
    return this.http.post<any>(this.addUri, candidate);
  }

  getCandidates(skills: string[]): Observable<CandidateList>{
    return this.http.post<CandidateList>(this.getUri, skills);
  }
}

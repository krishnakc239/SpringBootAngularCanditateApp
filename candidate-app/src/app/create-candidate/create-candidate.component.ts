import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Candidate, CandidateList} from '../model/candidate';
import {CandidateService} from '../service/candidateService';


@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  nameControl = new FormControl();
  projectControl = new FormControl();
  yearControl = new FormControl();
  skillsControl = new FormControl();
  skillSets = new FormControl();
  candidate: Candidate = new Candidate();
  candidateList: CandidateList;
  displayedColumns: string[] = ['name', 'project', 'year', 'skills'];
  dataSource : Candidate[];



  constructor(private candidateService: CandidateService) {

  }

  ngOnInit() {
  }

  insertCandidate(){

    this.candidate.name = this.nameControl.value;
    this.candidate.project = this.projectControl.value;
    this.candidate.year = this.yearControl.value;
    this.candidate.skills = this.skillsControl.value.split(",");

    this.candidateService.addCandidate(this.candidate)
      .subscribe(
        data  => {
          console.log("POST Request is successful ", data);

        },
        error  => {

          console.log("Error", error);

        }

      );
  }

  searchCandidate(){
    this.candidateService.getCandidates(this.skillSets.value.split(','))
      .subscribe(data => {
          this.candidateList = data;
          this.dataSource = this.candidateList.candidates;
          console.dir(data);
      })
  }

  resetInputFields(){
    this.nameControl.setValue('');
    this.projectControl.setValue('');
    this.yearControl.setValue('');
    this.skillsControl.setValue('');
  }



}

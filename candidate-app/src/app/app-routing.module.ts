import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCandidateComponent} from './create-candidate/create-candidate.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

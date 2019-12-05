import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCandidateComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

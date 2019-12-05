import { Component } from '@angular/core';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'candidate-app';

  goToDoc() : void {
    window.open("localhost:8080/swagger-ui.html", "_blank");
  }
}

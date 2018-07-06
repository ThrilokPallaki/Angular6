import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  public onSubmit(): void {
    console.log('User: ' + JSON.stringify(this.user));
    this.dialogRef.close();
  }
}

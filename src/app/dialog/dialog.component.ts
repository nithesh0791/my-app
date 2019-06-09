import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  name : string;

  constructor(public dialog:MatDialog) { 
    this.name = 'Nithesh ';
  }

  openDialog(): void {
   const dialogRef = this.dialog.open(SelectFundsDialogue,
    {
      height: '400px',
      width: '400px',
      data: {name: this.name}
    }
  );    
  }

  ngOnInit() { }

}

@Component({
  selector: 'select-funds-overview',
  templateUrl: 'select-funds.html',
})

export class SelectFundsDialogue {

  constructor(public dialogRef: MatDialogRef<SelectFundsDialogue>,
    @ Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { NewNoteComponent } from 'src/app/notes/new-note/new-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  createNewNote() :void{
    const dialogRef = this.dialog.open(NewNoteComponent, {
      width: "500px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal closed");
    })
  }

  ngOnInit(): void {
  }

}

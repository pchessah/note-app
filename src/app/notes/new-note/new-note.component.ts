import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { INote } from '../inote';
import { MatDialogRef } from "@angular/material/dialog"

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  note: INote

  newNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })
  constructor( private fb: FormBuilder, public dialogRef: MatDialogRef<NewNoteComponent>) { }

  newNote() :void{
    this.note = this.newNoteForm.value;
    this.dialogRef.close('saved');
  }

  ngOnInit(): void {
  }

}

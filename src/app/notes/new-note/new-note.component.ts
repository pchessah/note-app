import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { INote } from '../inote';
import { MatDialogRef } from "@angular/material/dialog"
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  singleNote: INote;
  notes: INote[];

  newNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })
  constructor( private _noteService: NotesServiceService, private fb: FormBuilder, public dialogRef: MatDialogRef<NewNoteComponent>) { }

  newNote() :void{
    this.singleNote = this.newNoteForm.value;
    this._noteService.addNote(this.singleNote).subscribe(note=>{
      this.notes.push(note)
    });    
    this.dialogRef.close('saved');
  }

  ngOnInit(): void {
  }

}

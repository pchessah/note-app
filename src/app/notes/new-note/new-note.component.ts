import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { INote } from '../inote';
import { MatDialogRef } from "@angular/material/dialog"
import { NotesServiceService } from '../notes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  singleNote: INote;
  notes: INote[];
  currentDate: string;

  newNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })
  constructor( private _noteService: NotesServiceService, private fb: FormBuilder, public dialogRef: MatDialogRef<NewNoteComponent>, private _router: Router ) { }

  ngOnInit(): void{
    this.getCurrentDate();
  }
  
  newNote() :void{
    this.newNoteForm.controls["dateOfCreation"].setValue(this.currentDate)
    this.singleNote = this.newNoteForm.value;
    this._noteService.addNote(this.singleNote).subscribe(note=>{
      this.notes.push(note)
    });    
    this.dialogRef.close('saved');
  }

  goBack(): void{
  this.dialogRef.close();    
  }

  getCurrentDate(): void{
    let currentDate = new Date();
    let dd = String(currentDate.getDate()).padStart(2, '0');
    let mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = currentDate.getFullYear();
    this.currentDate = dd + '/' + mm + '/' + yyyy;
  }




}

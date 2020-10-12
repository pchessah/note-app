import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { INote } from '../inote';
import { MatDialogRef } from "@angular/material/dialog"
import { NotesServiceService } from '../notes-service.service';
import { Router } from '@angular/router';
import { v4 as uniqueId } from "uuid"

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  singleNote: INote;
  currentDate: string;
  id: number;
  notes: INote[] =[];

  newNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })
  constructor( private _noteService: NotesServiceService, private fb: FormBuilder, public dialogRef: MatDialogRef<NewNoteComponent>, private _router: Router ) { }

  ngOnInit(): void{
    this.getCurrentDate();
    this.getId();
    this._noteService.getNotes().subscribe(notes=> this.notes = notes)
  }
  
  newNote() :void{
    this.newNoteForm.controls["dateOfCreation"].setValue(this.currentDate);
    this.newNoteForm.controls["id"].setValue(this.id)
    this.singleNote = this.newNoteForm.value;
    this._noteService.addNote(this.singleNote).subscribe(singleNote => {
      this.notes.push(singleNote);
      console.log(this.notes);
    });    
    this.dialogRef.close('saved');
    alert(`New note: ${this.singleNote.title} saved.`);
    this._router.navigate(["/all-notes"])
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

  getId(): void{
    this.id = uniqueId();    
  }




}

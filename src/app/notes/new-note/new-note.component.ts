import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  id: number;
  title: string;
  content: string;
  dateOfCreation: string;

  newNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })
  constructor( private fb: FormBuilder) { }

  newNote() :void{
    console.log(this.newNoteForm.value); 
  }

  ngOnInit(): void {
  }

}

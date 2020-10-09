import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INote } from '../inote';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {
  
  Notes: INote[];
  singleNote: INote;
  errorMessage: string;

  constructor( private routes: ActivatedRoute, private _notesService:NotesServiceService) { }

  ngOnInit(): void {
    this._notesService.getNotes().subscribe({
      next: notes => {
        this.Notes = notes;
        this.routes.paramMap.subscribe(params =>{
          let id = params.get("id");
          this.singleNote = this.Notes.find(note => note.id === +id)
        });
      },
      error: err => this.errorMessage = err      
    })
  }

}

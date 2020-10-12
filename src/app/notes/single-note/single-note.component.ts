import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private routes: ActivatedRoute, private _notesService: NotesServiceService) { }

  ngOnInit(): void {
    this._notesService.getNotes().subscribe({
      next: notes => {
        this.Notes = notes;
        this.routes.paramMap.subscribe(params => {
          let id = params.get("id");
          console.log(this.Notes);
          this.singleNote = this.Notes.find(note => note.id === id)

        });
      },
      error: err => this.errorMessage = err
    })
  }

  deleteNote(singleNote: INote): void {
    this.Notes = this.Notes.filter(otherNotes => otherNotes !== singleNote);
    alert(`${singleNote.title} deleted!`);
    this._notesService.deleteNote(singleNote).subscribe();
    this.router.navigate(["/all-notes"]);
  }

}

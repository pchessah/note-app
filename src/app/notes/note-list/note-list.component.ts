import { Component, OnInit } from '@angular/core';
import { INote } from '../inote';
import { NotesServiceService } from '../notes-service.service';



@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  pageTitle: string = "Your Notes";
  Notes: INote[]
  displayedColumns: string[] = ['position', 'title', 'note', 'actions'];
  dataSource
  constructor( private _notesService: NotesServiceService) { }

  ngOnInit(): void {
    this._notesService.getNotes().subscribe(notes=>{
      this.Notes = notes;
      this.dataSource=this.Notes;
    });
  }

  deleteNote( singleNote: INote): void{
    this.Notes = this.Notes.filter(otherNotes=> otherNotes !== singleNote);
    this.dataSource=this.Notes;
    this._notesService.deleteNote(singleNote).subscribe();
  }

}

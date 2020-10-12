import { Component, OnInit } from '@angular/core';
import { INote } from '../inote';
import { NotesServiceService } from '../notes-service.service';
import { MatDialog } from "@angular/material/dialog";
import { NewNoteComponent } from 'src/app/notes/new-note/new-note.component';



@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  pageTitle: string = "Your Notes";
  Notes: INote[]
  displayedColumns: string[] = ['title', 'note', 'actions'];
  dataSource
  constructor( private _notesService: NotesServiceService, public dialog: MatDialog) { }

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

  createNewNote() :void{
    const dialogRef = this.dialog.open(NewNoteComponent, {
      width: "500px",
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log("Modal closed");
    })
  }

}

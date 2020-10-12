import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { INote } from '../inote';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {


  notes: INote[];
  singleNote: INote;

  editNoteForm = this.fb.group({
    id:[""],
    title: [""],
    content: [""],
    dateOfCreation:[""]
  })

  constructor( private fb: FormBuilder, private _noteService: NotesServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._noteService.getNotes().subscribe( notes=>{
      this.notes = notes;  
      this.getSingleNote();  
    }); 

   
  }

  getSingleNote(): void{
    const id = +this.route.snapshot.paramMap.get("id");
    this.singleNote = this.notes.find(note => note.id === id);
    this.editNoteForm.controls["id"].setValue(this.singleNote.id);
  }

  saveEditedForm(): void{  
    this.singleNote = this.editNoteForm.value
    this._noteService.editNote(this.singleNote).subscribe(()=>{
      this.goBack();
    })


  }

  goBack(): void{
    this.router.navigate(["/all-notes"]);
  }

}

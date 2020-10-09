import { Component, OnInit } from '@angular/core';
import { INote } from '../inote';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  pageTitle: string = "Your Notes";
  Notes: INote[]=[
    {id: 1,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    {id: 2,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    {id: 3,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    {id: 4,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    {id: 5,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    {id: 6,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
  ]

  displayedColumns: string[] = ['position', 'title', 'note', 'actions'];
  dataSource = this.Notes;
  constructor() { }

  ngOnInit(): void {
  }

}

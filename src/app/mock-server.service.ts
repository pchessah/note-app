import { Injectable } from '@angular/core';
import { INote } from "./notes/inote";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockServerService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const notes = [
      {id: 1,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
      {id: 2,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
      {id: 3,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
      {id: 4,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
      {id: 5,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
      {id: 6,title:"church", content:"Go to church", dateOfCreation:"10/10/10"},
    ]

    return { notes }
  }
  genId(notes: INote[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }

}

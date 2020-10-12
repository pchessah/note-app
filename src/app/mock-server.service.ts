import { Injectable } from '@angular/core';
import { INote } from "./notes/inote";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockServerService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const notes = []

    return { notes }
  }
}

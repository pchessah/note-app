import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { INote } from './inote';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService  {
  

  constructor( private http: HttpClient ) { }
  
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  notesUrl="api/notes";

  //get all the notes 
  getNotes(): Observable<INote[]>{
    return this.http.get<INote[]>(this.notesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),  //log the information gotten
      catchError(this.handleError) //catch error
    )
  }

  getSingleNote(id: number): Observable<INote>{
    const notesUrl =`${this.notesUrl}/${id}`
    return this.http.get<INote>(notesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  //add  single note

  addNote(note: INote): Observable<INote>{
    return this.http.post<INote>(this.notesUrl, note, this.httpOptions).pipe(
      tap((newNote: INote)=> console.log("added new note"+JSON.stringify(newNote))),
      catchError(this.handleError)
    );
  }

  //delete note

  deleteNote(note: INote): Observable<INote>{
    const id = note.id;
    const url = `${this.notesUrl}/${id}`;

    return this.http.delete<INote>(url ,this.httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data)+ " was deleted")),
      catchError(this.handleError)
    )
  }

  editNote(note: INote): Observable<any>{
    return this.http.put(this.notesUrl, note, this.httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data)+ " was edited")),
      catchError(this.handleError)      
    );
  }




  handleError(err: HttpErrorResponse){
    let errorMessage = "";
    //check if error is on the client side
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`
    } else {
      //else error is server side
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

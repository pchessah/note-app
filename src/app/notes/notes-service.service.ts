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

  //get all the notes 
  getNotes(): Observable<INote[]>{
    const notesUrl = "api/notes"
    return this.http.get<INote[]>(notesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),  //log the information gotten
      catchError(this.handleError) //catch error
    )
  }

  getSingleNote(id: number): Observable<INote>{
    const notesUrl =`api/notes/${id}`
    return this.http.get<INote>(notesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
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

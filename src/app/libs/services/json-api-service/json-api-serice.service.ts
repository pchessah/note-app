import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiSericeService {

  constructor(private http: HttpClient) { }

  getSampleJsonApiRecords(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=2', {})
  }
}

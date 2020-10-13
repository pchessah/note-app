import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubApi } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  
  constructor(private _httpClient: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<IGithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<IGithubApi>(requestUrl);
  }
}

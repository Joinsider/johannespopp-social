import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepository } from '../interface/github.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getPublicRepositories(username: string): Observable<GithubRepository[]> {
    return this.http.get<GithubRepository[]>(`https://api.github.com/users/${username}/repos`);
  }
}

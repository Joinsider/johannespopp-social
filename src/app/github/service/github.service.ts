import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getPublicRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}

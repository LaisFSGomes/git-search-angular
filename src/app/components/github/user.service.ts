import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${username}`);
  }
}

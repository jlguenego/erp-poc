import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<User> {
    const subject = new Subject<User>();
    this.http
      .post<User>('/ws/login', {
        login,
        password,
      })
      .subscribe({
        next: (user) => {
          subject.next(user);
        },
        error: (err) => {
          console.error('error while login', err);
          subject.error(err);
        },
      });
    return subject;
  }
}

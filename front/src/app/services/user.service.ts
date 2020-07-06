import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import sha1 from 'js-sha1';


console.log('sha1', sha1('1234'));

@Injectable({
  providedIn: 'root',
})
export class UserService {
  salt = '';
  constructor(private http: HttpClient) {
    this.http.get<{ salt: string }>('/ws/salt').subscribe({
      next: (data) => (this.salt = data.salt),
      error: (err) => console.error('no salt found'),
    });
  }

  login(login: string, password: string): Observable<User> {
    const subject = new Subject<User>();
    this.http
      .post<User>('/ws/login', {
        login,
        password: sha1(this.salt + login + this.salt + password + this.salt),
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

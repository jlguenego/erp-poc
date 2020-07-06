import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import sha1 from 'js-sha1';
import { Router } from '@angular/router';

console.log('sha1', sha1('1234'));

@Injectable({
  providedIn: 'root',
})
export class UserService {
  salt = '';
  user$ = new BehaviorSubject<User>(undefined);

  // caching
  isConnected = false;
  user: User;
  afterLoginUrl = '/';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<{ salt: string }>('/ws/salt').subscribe({
      next: (data) => (this.salt = data.salt),
      error: (err) => console.error('no salt found'),
    });

    this.user$.subscribe((user) => {
      this.isConnected = user !== undefined;
      this.user = user;
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
          this.user$.next(user);
          this.router.navigateByUrl(this.afterLoginUrl);
          this.afterLoginUrl = '/';
          subject.next(user);
        },
        error: (err) => {
          console.error('error while login', err);
          this.user$.next(undefined);
          subject.error(err);
        },
      });
    return subject;
  }

  logout() {
    this.user$.next(undefined);
    this.router.navigateByUrl('/');
  }
}

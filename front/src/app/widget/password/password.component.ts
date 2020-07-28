import { Component, OnInit, ElementRef } from '@angular/core';
import { faEye, faEyeDropper, faSlash, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  type$ = new BehaviorSubject('password');

  constructor(private elt: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.type$.subscribe((type) => {
      this.elt.nativeElement.querySelector('input').type = type;
    });
  }

  toggle() {
    console.log('toggle');
    if (this.type$.value === 'password') {
      this.type$.next('text');
      return;
    }
    this.type$.next('password');
  }
}

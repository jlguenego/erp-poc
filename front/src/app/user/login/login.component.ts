import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  f = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  error = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.userService
      .login(this.f.value.login, this.f.value.password)
      .subscribe({
        next: (user) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.error = 'Login ou password incorrect';
        },
      });
  }
}

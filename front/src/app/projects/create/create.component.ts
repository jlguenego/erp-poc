import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const defaultValue = {
  code: '',
  label: '',
  status: 'En cours',
};

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    code: new FormControl(defaultValue.code, [
      Validators.required,
      Validators.maxLength(4),
    ]),
    label: new FormControl(defaultValue.label, [Validators.required]),
    status: new FormControl(defaultValue.status, [Validators.required]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  reset() {
    this.f.reset(defaultValue);
  }

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/chantiers');
  }
}

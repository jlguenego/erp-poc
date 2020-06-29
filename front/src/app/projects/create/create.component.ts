import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    label: new FormControl('', [Validators.required]),
    status: new FormControl('En cours', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
}

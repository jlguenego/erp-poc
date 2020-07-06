import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  Form,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';

const defaultValue = {
  code: '',
  label: '',
  status: 'En cours',
} as Project;

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
    keywords: new FormArray([]),
  });

  keywords: FormArray;

  constructor(private router: Router, private projectService: ProjectService) {
    this.keywords = this.f.controls.keywords as FormArray;
  }

  ngOnInit(): void {}

  reset() {
    this.f.reset(defaultValue);
  }

  submit() {
    console.log('submit');
    this.projectService.add(this.f.value as Project);
    this.router.navigateByUrl('/chantiers');
  }

  addKeywords() {
    this.keywords.push(
      new FormGroup({
        key: new FormControl('asdf'),
        value: new FormControl('qwer'),
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  f = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  isCollapsed = [false, true, true, true];
  constructor() {}

  ngOnInit(): void {}

  togglingAccordeon(event: boolean, index: number) {
    console.log('togglingAccordeon');
    console.log('event: ', event);
    console.log('index: ', index);
    this.isCollapsed = new Array(4).fill(true);
    this.isCollapsed[index] = event;
  }
}

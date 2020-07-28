import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Salarie } from '../interfaces/salarie';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss'],
})
export class SalarieComponent implements OnInit {
  salarie$: Observable<Salarie[]>;

  constructor() {}

  ngOnInit(): void {}
}

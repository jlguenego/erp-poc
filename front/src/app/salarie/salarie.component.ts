import { Component, OnInit } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Salarie } from '../interfaces/salarie';
import { AppState, selectSalarieCollection } from '../reducers';
import { loadSalaries } from '../actions/salarie.actions';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss'],
})
export class SalarieComponent implements OnInit {
  salarie$: Observable<Salarie[]>;
  faRedo = faRedo;

  constructor(private store: Store<AppState>) {
    this.salarie$ = this.store.pipe(select(selectSalarieCollection));
  }

  ngOnInit(): void {}

  refresh() {
    this.store.dispatch(loadSalaries());
  }
}

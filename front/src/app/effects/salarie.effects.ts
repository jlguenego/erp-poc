import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { loadSalariesSuccess, SalarieActionType } from '../actions/salarie.actions';

@Injectable()
export class SalarieEffects {
  loadSalarie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalarieActionType.LOAD),
      mergeMap((action) =>
        of([
          { code: 'XXX001', name: 'DUPONT', firstname: 'Jean' },
          { code: 'XXX001', name: 'DUPONT', firstname: 'Jean' },
          { code: 'XXX001', name: 'DUPONT', firstname: 'Jean' },
        ]).pipe(
          delay(2000),
          map((salaries) =>
            loadSalariesSuccess({
              data: salaries,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions) {
    this.actions$.subscribe((action) =>
      console.log('ceci est une action', action)
    );
  }
}

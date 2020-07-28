import { createAction, props } from '@ngrx/store';

export const loadSalaries = createAction(
  '[Salarie] Load Salaries'
);

export const loadSalariesSuccess = createAction(
  '[Salarie] Load Salaries Success',
  props<{ data: any }>()
);

export const loadSalariesFailure = createAction(
  '[Salarie] Load Salaries Failure',
  props<{ error: any }>()
);

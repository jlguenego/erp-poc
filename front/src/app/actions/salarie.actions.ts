import { createAction, props } from '@ngrx/store';
import { Salarie } from '../interfaces/salarie';

export enum SalarieActionType {
  LOAD = '[Salarie] Load Salaries',
  LOAD_SUCCESS = '[Salarie] Load Salaries Success',
  LOAD_FAILURE = '[Salarie] Load Salaries Failure',
}

export const loadSalaries = createAction(SalarieActionType.LOAD);

export const loadSalariesSuccess = createAction(
  SalarieActionType.LOAD_SUCCESS,
  props<{ data: Salarie[] }>()
);

export const loadSalariesFailure = createAction(
  SalarieActionType.LOAD_FAILURE,
  props<{ error: Error }>()
);

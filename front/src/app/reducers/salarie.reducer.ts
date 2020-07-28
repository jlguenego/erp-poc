import { createReducer, on } from '@ngrx/store';
import {
  loadSalaries,
  loadSalariesFailure,
  loadSalariesSuccess,
} from '../actions/salarie.actions';
import { Salarie } from '../interfaces/salarie';
import { AppState } from '.';

export interface SalarieState {
  collection: Salarie[];
  loading: boolean;
  error: string;
}



const initialSalarieState: SalarieState = {
  collection: [],
  loading: false,
  error: '',
};

export const salarieReducer = createReducer(
  initialSalarieState,
  on(loadSalaries, (state, props) => {
    console.log('reducer on loadSalarie', props);
    return {
      ...state,
      collection: [],
      loading: true,
      error: '',
    };
  }),
  on(loadSalariesFailure, (state, props) => {
    console.log('reducer on loadSalariesFailure', props);
    return {
      ...state,
      loading: false,
      error: 'oups error' + props.error.message,
    };
  }),
  on(loadSalariesSuccess, (state, props) => {
    console.log('reducer on loadSalariesSuccess', props);
    return {
      ...state,
      loading: false,
      collection: props.data,
    };
  })
);

export const selectSalarieCollection = (state: AppState) =>
  state.salarie.collection;
export const selectSalarieLoading = (state: AppState) => state.salarie.loading;

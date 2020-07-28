import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Salarie } from '../interfaces/salarie';
import {
  loadSalaries,
  loadSalariesFailure,
  loadSalariesSuccess,
} from '../actions/salarie.actions';

export interface SalarieState {
  collection: Salarie[];
  loading: boolean;
  error: string;
}

const initialSalarieState: SalarieState = {
  collection: [{ code: 'XXX001', name: 'DUPONT', firstname: 'Marcel' }],
  loading: false,
  error: '',
};

export interface AppState {
  salarie: SalarieState;
  // chantier: ChantierState;
  // commande: CommandeState;
}

const salarieReducer = createReducer(
  initialSalarieState,
  on(loadSalaries, (state, props) => {
    console.log('reducer on loadSalarie', props);
    return {
      ...state,
      collection: [{ code: 'XXX001', name: 'DUPONT', firstname: 'Jean' }],
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

export const reducers: ActionReducerMap<AppState> = {
  salarie: salarieReducer,
  // chantier: chantierReducer,
  // commande: commandeReducer
};

export const selectSalarieCollection = (state: AppState) =>
  state.salarie.collection;
export const selectSalarieLoading = (state: AppState) =>
  state.salarie.loading;

export const metaReducers: MetaReducer<AppState>[] = [];

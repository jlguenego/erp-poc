import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { SalarieState, salarieReducer } from './salarie.reducer';

export interface AppState {
  salarie: SalarieState;
  // chantier: ChantierState;
  // commande: CommandeState;
}

export const reducers: ActionReducerMap<AppState> = {
  salarie: salarieReducer,
  // chantier: chantierReducer,
  // commande: commandeReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];

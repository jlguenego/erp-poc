import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SalarieEffects } from './salarie.effects';

describe('SalarieEffects', () => {
  let actions$: Observable<any>;
  let effects: SalarieEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SalarieEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SalarieEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import * as fromSalarie from './salarie.actions';

describe('loadSalaries', () => {
  it('should return an action', () => {
    expect(fromSalarie.loadSalaries().type).toBe('[Salarie] Load Salaries');
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpProjectService } from './http-project.service';

describe('HttpProjectService', () => {
  let service: HttpProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

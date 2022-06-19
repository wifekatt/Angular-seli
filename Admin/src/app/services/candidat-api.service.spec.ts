import { TestBed } from '@angular/core/testing';

import { candidatApiService } from './candidat-api.service';

describe('candidatApiService', () => {
  let service: candidatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(candidatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

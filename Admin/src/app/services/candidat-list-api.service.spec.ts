import { TestBed } from '@angular/core/testing';

import { CandidatListApiService } from './candidat-list-api.service';

describe('CandidatListApiService', () => {
  let service: CandidatListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

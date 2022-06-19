import { TestBed } from '@angular/core/testing';

import { CandidatListService } from './candidat-list.service';

describe('CandidatListService', () => {
  let service: CandidatListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

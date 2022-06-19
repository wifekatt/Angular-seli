import { TestBed } from '@angular/core/testing';

import { UrneService } from './urne.service';

describe('UrneService', () => {
  let service: UrneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

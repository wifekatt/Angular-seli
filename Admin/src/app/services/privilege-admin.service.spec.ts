import { TestBed } from '@angular/core/testing';

import { PrivilegeAdminService } from './privilege-admin.service';

describe('PrivilegeAdminService', () => {
  let service: PrivilegeAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegeAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

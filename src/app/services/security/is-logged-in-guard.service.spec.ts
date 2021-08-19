import { TestBed } from '@angular/core/testing';

import { IsLoggedInGuardService } from './is-logged-in-guard.service';

describe('RoleGuardService', () => {
  let service: IsLoggedInGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedInGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

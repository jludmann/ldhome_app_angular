import { TestBed } from '@angular/core/testing';

import { IsAgentGuardService } from './is-agent-guard.service';

describe('IsAgentService', () => {
  let service: IsAgentGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAgentGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

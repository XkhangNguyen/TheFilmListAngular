import { TestBed } from '@angular/core/testing';

import { LockScrollService } from './lock-scroll.service';

describe('LockScrollService', () => {
  let service: LockScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

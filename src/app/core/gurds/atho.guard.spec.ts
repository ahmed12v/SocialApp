import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { athoGuard } from './atho.guard';

describe('athoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => athoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

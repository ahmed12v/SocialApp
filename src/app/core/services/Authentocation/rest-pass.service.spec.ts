import { TestBed } from '@angular/core/testing';

import { RestPassService } from './rest-pass.service';

describe('RestPassService', () => {
  let service: RestPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

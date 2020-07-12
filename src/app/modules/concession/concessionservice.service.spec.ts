import { TestBed } from '@angular/core/testing';

import { ConcessionserviceService } from './concessionservice.service';

describe('ConcessionserviceService', () => {
  let service: ConcessionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcessionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

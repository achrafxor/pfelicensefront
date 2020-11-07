import { TestBed } from '@angular/core/testing';

import { PartserviceService } from './partservice.service';

describe('PartserviceService', () => {
  let service: PartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegistreserviceService } from './registreservice.service';

describe('RegistreserviceService', () => {
  let service: RegistreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

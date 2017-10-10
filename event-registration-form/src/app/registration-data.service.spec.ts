import { TestBed, async, inject } from '@angular/core/testing';

import { RegistrationDataService } from './registration-data.service';

describe('Service: RegistrationData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationDataService],
    });
  });

  it(
    'should be created',
    inject([RegistrationDataService], (service: RegistrationDataService) => {
      expect(service).toBeTruthy();
    }),
  );

  it(
    'should return data',
    inject([RegistrationDataService], (service: RegistrationDataService) => {
      const result = service.getRegistrations();
      expect(result).toBeTruthy();
    }),
  );
});

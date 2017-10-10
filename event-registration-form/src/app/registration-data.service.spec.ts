import { TestBed, async, inject } from '@angular/core/testing';

import { RegistrationDataService } from './registration-data.service';
import { Registration } from './registration';

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

  it(
    'should add a person`s registration',
    inject([RegistrationDataService], (service: RegistrationDataService) => {
      const testEntry: Registration = {
        name: 'Test Tester',
        email: 'test@test.com',
        foodChoice: 'meat',
        goingToSauna: true,
      };
      service.addRegistration(testEntry);
      const registrations = service.getRegistrations();
      expect(registrations).toEqual([testEntry]);
    }),
  );
});

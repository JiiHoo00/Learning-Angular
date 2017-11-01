import { TestBed, async, inject } from '@angular/core/testing';

import { RegistrationDataService } from './registration-data.service';
import { Registration } from './registration';

describe('Service: RegistrationData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationDataService],
    });
    localStorage.clear();
  });

  it(
    'should be created',
    inject([RegistrationDataService], (service: RegistrationDataService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return data',
    inject([RegistrationDataService], (service: RegistrationDataService) => {
      const result = service.getRegistrations();
      expect(result).toBeTruthy();
    })
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
      expect(registrations).toContain(testEntry);
    })
  );

  xit(
    'should hold the data after restart, PENDING need to find a way to test', // Currently testing by manually restarting the application
    inject(
      [RegistrationDataService, RegistrationDataService],
      (service: RegistrationDataService, service2: RegistrationDataService) => {
        const testEntry: Registration = {
          name: 'Test Tester',
          email: 'test@test.com',
          foodChoice: 'meat',
          goingToSauna: true,
        };
        service.addRegistration(testEntry);
        const dataBeforeRestart = service.getRegistrations();
        // restart application/service
        expect(service.getRegistrations()).toEqual(dataBeforeRestart);
      }
    )
  );
});

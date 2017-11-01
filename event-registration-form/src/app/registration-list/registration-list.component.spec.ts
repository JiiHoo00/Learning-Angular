import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegistrationDataService } from '../registration-data.service';

import { Registration } from '../registration';

import { RegistrationListComponent } from './registration-list.component';

describe('RegistrationListComponent', () => {
  let component: RegistrationListComponent;
  let fixture: ComponentFixture<RegistrationListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RegistrationListComponent],
        providers: [RegistrationDataService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should display registrations',
    inject([RegistrationDataService], (registrationService: RegistrationDataService) => {
      localStorage.clear();
      const testRegistration: Registration = {
        name : 'Test Tester',
        email : 'test@test.com',
        foodChoice : 'meat',
        goingToSauna : true,
      };
      registrationService.addRegistration(testRegistration);
      registrationService.addRegistration(testRegistration);
      registrationService.addRegistration(testRegistration);
      registrationService.addRegistration(testRegistration);
      fixture.detectChanges();

      const newFixture = TestBed.createComponent(RegistrationListComponent);
      newFixture.detectChanges();
      const listElements = newFixture.nativeElement.querySelectorAll('td');
      expect(listElements[0].textContent).toEqual('1');
      expect(listElements[1].textContent).toEqual(testRegistration.name);
      expect(listElements[2].textContent).toEqual(testRegistration.email);
      expect(listElements[3].textContent).toEqual(testRegistration.foodChoice);
      if (testRegistration.goingToSauna) {
        expect(listElements[4].textContent).toBeTruthy();
      } else {
        expect(listElements[4].textContent).toBeFalsy();
      }
    })
  );
});

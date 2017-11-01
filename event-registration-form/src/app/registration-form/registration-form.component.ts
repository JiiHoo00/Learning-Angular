import { Component } from '@angular/core';

import { RegistrationDataService } from '../registration-data.service';

import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  foodChoices = ['Meat', 'Fish', 'Vegetarian'];

  registration = new Registration();

  constructor(private registrationService: RegistrationDataService ) {

  }

  onSubmit() {
    this.registrationService.addRegistration(this.registration);
    this.registration = new Registration();
  }
}

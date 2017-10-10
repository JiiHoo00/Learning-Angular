import { Injectable } from '@angular/core';

import { Registration } from './registration';

@Injectable()
export class RegistrationDataService {
  private registrations = new Array<Registration>();

  constructor() {}

  getRegistrations(): Registration[] {
    return this.registrations;
  }

  addRegistration(registration: Registration): void {
    this.registrations.push(registration);
  }
}

import { Injectable } from '@angular/core';

import { Registration } from './registration';

@Injectable()
export class RegistrationDataService {
  private dataKey = 'registrations';

  constructor() {}

  getRegistrations(): Registration[] {
    const dataJSON = localStorage.getItem(this.dataKey);
    if (dataJSON === null) {
      return new Array<Registration>();
    }
    return JSON.parse(dataJSON);
  }

  addRegistration(registration: Registration): void {
    const data: Registration[] = this.getRegistrations();
    data.push(registration);
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }
}

import { Component, OnInit } from '@angular/core';

import { RegistrationDataService } from '../registration-data.service';

import { Registration } from '../registration';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  registrations: Registration[];
  public startIndex = 0;

  constructor(private registrationService: RegistrationDataService) {}

  ngOnInit() {
    this.registrations = this.registrationService.getRegistrations();
  }
}

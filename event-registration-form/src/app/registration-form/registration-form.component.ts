import { Component, OnInit } from '@angular/core';

import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  foodChoices = ['Meat', 'Fish', 'Vegetarian'];

  registration = new Registration();

  constructor() { }

  ngOnInit() {
  }

}

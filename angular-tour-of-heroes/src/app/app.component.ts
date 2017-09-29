import { Component, OnInit } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}!</h1>
    <app-heroes-list></app-heroes-list>
    `,
  styles: [``],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  constructor() {}

  ngOnInit() {}
}

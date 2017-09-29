import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}!</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `,
  styles: [``],
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {}
}

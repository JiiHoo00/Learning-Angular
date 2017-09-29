import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}!</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styles: [``],
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {}
}

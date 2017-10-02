import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}!</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes" RouterLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {}
}

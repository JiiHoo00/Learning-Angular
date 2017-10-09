import { Component, OnInit } from '@angular/core';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

/*
  NgOnInit is an example of a lifecycle-hook. Basically it's just a method that is called at a certain situation.
  NgOnInit is called after first display. ngOnDestroy is called before destroying the component, for cleanup purposes.
  NgDoCheck is called on every DetectChanges if component has something that angular doesn't check on its own.
*/
  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .then(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}

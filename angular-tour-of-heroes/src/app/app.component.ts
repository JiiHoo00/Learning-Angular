import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/*
 @Component is one form of Angular's directive
 Component has typescript code like all directives, but it also contains
 a template (either in the .ts-file or as a separate template .html file)
 with an optional stylesheet (also in .ts or a separate .css ) for the view

 Other forms of Angular's directive are:
 1) modifying the elements of the DOM (also known as attribute directive: https://angular.io/guide/attribute-directives)
 2) modifying DOM structure itself (see: https://angular.io/guide/structural-directives

  All versions of the directives can be used either
  by using ready made directives (like *ngIf and ngModel)
  or by extending @Directive create custom directives
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = {
    id : 1,
    name : 'Windstorm',
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  selector: 'app-heroes-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }
    this.heroService.create(heroName).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

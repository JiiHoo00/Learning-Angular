import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from '../services/hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
/*
  this @Input is not used anymore, but it was one way for components to communicate with each other.
  @Input makes the attribute public for Angular and can be changed in other components with just the attribute name inside []
  in the template for example [attribute]="variableContainingNewValue"
  @Input-variable can also have setters and getters: https://angular.io/guide/component-interaction
*/
  @Input() hero: Hero;

  /*
  Dependency Injection at work, you can just ask something in the constructor parameter list and angular will give you the
  object when calling the constructor. The Class needs to be listed in some providers array, either in this component,
  it's parent component or in the @NgModule where this component is located.
  */
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')),
      )
      .subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
  }
}

import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id : 1,
    name : 'Windstorm',
  };
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

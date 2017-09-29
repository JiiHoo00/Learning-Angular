import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    // return this.getHeroesSlowly();
  }
  /*
   getHeroesSlowly(): Promise<Hero[]> {
     return new Promise(resolve => {
       setTimeout(() => resolve(Promise.resolve(HEROES)), 2000);
     });
   }
*/

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}

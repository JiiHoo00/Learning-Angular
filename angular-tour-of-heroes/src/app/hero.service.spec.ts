import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeroService],
    });
  });

  it(
    'should be created',
    inject([HeroService], (service: HeroService) => {
      expect(service).toBeTruthy();
    }),
  );

  it(
    'should return mock data',
    inject([HeroService], (service: HeroService) => {
      expect(
        service.getHeroes().then(result => {
          return result === HEROES;
        }),
      ).toBeTruthy();
    }),
  );

  it('should update hero details',
    inject([HeroService], (service: HeroService) => {
      let hero: Hero;
      service.getHero(0).then(result => {
        hero = result;
        hero.name += 'n';
        service.update(hero);
        service.getHero(0).then(updatedResult => {
          hero = updatedResult;
          expect(hero.name === 'Zeron');
        });
      });
    })
  );
});

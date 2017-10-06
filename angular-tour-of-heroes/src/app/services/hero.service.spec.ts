import { HttpModule } from '@angular/http';
import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroService } from './hero.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
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
    async(
      inject([HeroService], (service: HeroService) => {
        service.getHeroes().then(result => {
          expect(result).toEqual(HEROES);
        });
      }),
    ),
  );

  it(
    'should update hero details',
    async(
      inject([HeroService], (service: HeroService) => {
        let hero: Hero;
        let finalhero: Hero;
        service.getHero(0).then(result => {
          hero = result;
          hero.name += 'n';
          service.update(hero);
          service.getHero(0).then(updatedResult => {
            finalhero = updatedResult;
            expect(finalhero.name).toEqual('Zeron');
          });
        });
      }),
    ),
  );

  it(
    'should create new hero',
    async(
      inject([HeroService], (service: HeroService) => {
        const heroName = 'TestHero';
        service.create(heroName).then(newHero => {
          service.getHero(newHero.id).then(newhero => {
            expect(newhero.name).toEqual(heroName);
          });
        });
      }),
    ),
  );

  it(
    'should delete a hero',
    async(
      inject([HeroService], (service: HeroService) => {
        let gotRejection = false;
        service.getHero(0).then(heroToBeDeleted => {
          expect(heroToBeDeleted).toBeTruthy();
          service.delete(heroToBeDeleted.id).then(() => {
            service
              .getHero(0)
              .then(() => {
                expect('to not be here').toEqual('but the hero wasn`t deleted');
              })
              .catch(() => {
                gotRejection = true;
                expect(gotRejection).toBeTruthy();
              });
          });
        });
      }),
    ),
  );
});

import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
});

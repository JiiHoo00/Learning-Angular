/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroSearchService } from './hero-search.service';

describe('Service: HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
      providers: [HeroSearchService],
    });
  });

  it(
    'should be created',
    inject([HeroSearchService], (service: HeroSearchService) => {
      expect(service).toBeTruthy();
    }),
  );
});

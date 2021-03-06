import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HEROES } from './mock-heroes';

import { HeroService } from './services/hero.service';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
        imports: [
          FormsModule,
          RouterTestingModule,
          HttpModule,
          InMemoryWebApiModule.forRoot(InMemoryDataService),
        ],
        providers: [HeroService],
      }).compileComponents();
      this.fixture = TestBed.createComponent(AppComponent);

      this.heroService = this.fixture.debugElement.injector.get(HeroService);
      // spyOn(this.heroService, 'getHeroes').and.callFake(() => {
      //   return Promise.resolve(HEROES);
      // });
      this.fixture.detectChanges(); // makes sure that the ngOnInit is run in the component, so that the data is loaded
    }),
  );

  it(
    'should create the app',
    async(() => {
      const app = this.fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  it(
    `should have as title 'Tour of Heroes'`,
    async(() => {
      const app = this.fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Tour of Heroes');
    }),
  );
});

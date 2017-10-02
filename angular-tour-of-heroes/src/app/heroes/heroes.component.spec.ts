import { HttpModule } from '@angular/http';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HEROES } from '../mock-heroes';

import { AppRoutingModule } from '../app-routing.module.ts.routing';

describe('HeroesComponent', () => {
  // synchronous beforeEach
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeroesComponent,
          HeroDetailComponent,
          DashboardComponent,
        ],
        imports: [
          FormsModule,
          AppRoutingModule,
          HttpModule,
        ],
        providers: [HeroService, { provide: APP_BASE_HREF, useValue: '/' }],
      }).compileComponents();
      this.fixture = TestBed.createComponent(HeroesComponent);
      this.heroService = this.fixture.debugElement.injector.get(HeroService);
      spyOn(this.heroService, 'getHeroes').and.callFake(() => {
        return Promise.resolve(HEROES);
      });

      this.component = this.fixture.componentInstance;
      this.fixture.detectChanges(); // trigger initial data binding
    }),
  );

  it(
    'should have hero object, with id and name',
    async(() => {
      const app = this.fixture.debugElement.componentInstance;
      expect(app.hero.id).toEqual(1);
      expect(app.hero.name).toEqual('Windstorm');
    }),
  );

  it(
    'should have hero data-array, with ten heroes',
    async(() => {
      this.fixture.whenStable().then(() => {
        // so that service has gotten the mock-data
        const app = this.fixture.debugElement.componentInstance;
        expect(app.heroes.length).toEqual(10);
        expect(app.heroes[0].name).toEqual('Mr. Nice');
        expect(app.heroes[0].id).toEqual(11);
      });
    }),
  );

  it(
    'should apply css class selected to the selected hero',
    fakeAsync(() => {
      this.fixture.detectChanges();
      const compiled = this.fixture.debugElement.nativeElement;
      compiled.querySelectorAll('.badge')[0].click();
      tick();
      this.fixture.detectChanges();
      const compiledAfterClick = this.fixture.debugElement.nativeElement;
      expect(compiledAfterClick.querySelectorAll('li')[0].className).toContain(
        'selected',
      );
    }),
  );

  it(
    'should render heroes data in a list',
    async(() => {
      this.fixture.whenStable().then(() => {
        // so that service has gotten the mock-data
        this.fixture.detectChanges();
        const compiled = this.fixture.debugElement.nativeElement;
        expect(compiled.querySelector('span').textContent).toContain(11);
        expect(compiled.querySelector('li').textContent).toContain('Mr. Nice');
      });
    }),
  );

  it(
    'should show clicked hero´s details',
    fakeAsync(() => {
      // not completely sure how this works, but I think this goes like this:
      this.fixture.detectChanges(); // updates the view for the start
      const compiled = this.fixture.debugElement.nativeElement;
      compiled.querySelectorAll('.badge')[0].click(); // clicks the hero
      this.fixture.detectChanges(); // updates the view, so that the click is detected
      tick(); // ticks the time forward
      this.fixture.detectChanges(); // updates the view show changes caused by the click
      const compiledAfterClick = this.fixture.debugElement.nativeElement;
      expect(compiledAfterClick.querySelectorAll('h2')[1].textContent).toContain(
        'Mr. Nice'.toUpperCase(),
      );
    }),
  );
});

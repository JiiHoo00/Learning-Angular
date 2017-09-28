import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroDetailComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppComponent);
    this.fixture.detectChanges(); // makes sure that the ngOnInit is run in the component, so that the data is loaded
  }));
  it('should create the app', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should have hero object, with id and name', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.hero.id).toEqual(1);
    expect(app.hero.name).toEqual('Windstorm');
  }));
  it('should have hero data-array, with ten heroes', async(() => {
    this.fixture.whenStable().then(() => { // so that service has gotten the mock-data
      const app = this.fixture.debugElement.componentInstance;
      expect(app.heroes.length).toEqual(10);
      expect(app.heroes[0].name).toEqual('Mr. Nice');
      expect(app.heroes[0].id).toEqual(11);
    });

  }));
  it('should render heroes data in a list', async(() => {
    this.fixture.whenStable().then(() => { // so that service has gotten the mock-data
      this.fixture.detectChanges();
      const compiled = this.fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').textContent).toContain(11);
      expect(compiled.querySelector('li').textContent).toContain('Mr. Nice');
    });

  }));
  it('should show selected hero\'s details', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    app.selectedHero = {
      id: 11,
      name: 'Mr. Nice'
    };
    this.fixture.detectChanges();
    this.fixture.whenStable().then(() => {
      const compiled = this.fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input').value).toBe('Mr. Nice');
    });
  }));
  it('should show clicked hero\'s details', fakeAsync(() => { // not completely sure how this works, but this goes like this:
    this.fixture.detectChanges(); // updates the view to current situation
    const compiled = this.fixture.debugElement.nativeElement;
    compiled.querySelectorAll('.badge')[0].click(); // clicks the hero
    this.fixture.detectChanges(); // updates the view, so that the click is detected
    tick(); // ticks the time forward
    this.fixture.detectChanges(); // updates the view to current situation
    const compiledAfterClick = this.fixture.debugElement.nativeElement;
    expect(compiledAfterClick.querySelectorAll('input')[0].value).toBe('Mr. Nice');
  }));
  it('should apply css class selected to the selected hero', fakeAsync(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    compiled.querySelectorAll('.badge')[0].click();
    tick();
    this.fixture.detectChanges();
    const compiledAfterClick = this.fixture.debugElement.nativeElement;
    expect(compiledAfterClick.querySelectorAll('li')[0].className).toContain('selected');
  }));
});

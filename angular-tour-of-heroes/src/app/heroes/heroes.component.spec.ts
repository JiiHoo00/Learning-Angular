
 import {
   TestBed,
   async
 } from '@angular/core/testing';

 import {
   FormsModule
 } from '@angular/forms';

 import {
   HeroesComponent
 } from './heroes.component';
 import {
   HeroService
 } from '../hero.service';
 import {
   HeroDetailComponent
 } from '../hero-detail/hero-detail.component';

 describe('HeroesComponent', () => {
   // synchronous beforeEach
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [
         HeroesComponent,
         HeroDetailComponent
       ],
       imports: [
         FormsModule
       ],
       providers: [
         HeroService
       ]
     }).compileComponents();
     this.fixture = TestBed.createComponent(HeroesComponent);
     this.component = this.fixture.componentInstance;
     this.fixture.detectChanges(); // trigger initial data binding
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

 });

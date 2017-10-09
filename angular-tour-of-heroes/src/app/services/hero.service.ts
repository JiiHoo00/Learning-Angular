import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero';

/*
  Services provide something to the application, mostly application logic or data retrieval
  for example data from an API or tax calculation for an order.
  In this case we have an API, which contains the heroes (provided by in-memory-data.service) and HeroService does the data
  retrieval from this API, by doing get and post requests in to certain URLs. Since the requests return an Observable
  we change it to a promise, because we are expecting only one result per request.
  The return values of the methods were always promises, so that the other components, which use this service, didn't have to change
  when we switched from a data-array to a HTTP-service.
*/
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('HeroService: An error occurred', error); // for testing
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: heroName }), {
        headers: this.headers,
      })
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }
}

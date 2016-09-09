import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {API_URL} from '../shared/';
import {Repository} from './repo';

@Injectable()
export class RepoService {
  constructor(
    private _http: Http,
    @Inject(API_URL) private API_URL: string
  ) {}

  search(terms): Observable<Repository[]> {
    const searchURL = `${this.API_URL}/repositories?q=${terms}&sort=stars`;
    return this._http
      .get(searchURL)
      .map((response: Response) => response.json().items);
  }
}

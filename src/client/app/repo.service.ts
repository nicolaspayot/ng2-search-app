import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RepoService {
  constructor(
    private _http: Http,
    @Inject('API_URL') private API_URL: string
  ) {}

  search(terms): Observable<Response> {
    const searchURL = `${this.API_URL}/repositories?q=${terms}&sort=stars`;
    return this._http.get(searchURL);
  }
}

import {TestBed, inject} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

import {API_URL} from '../shared/';
import {RepoService} from './repo.service';

describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepoService,
        MockBackend,
        BaseRequestOptions,
        { provide: API_URL, useValue: 'https://api.github.com/search' },
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultsOptions: BaseRequestOptions) =>
            new Http(backend, defaultsOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should search for repositories', inject(
      [MockBackend, RepoService],
      (backend: MockBackend, repoService: RepoService) => {

    const items = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    const response = new Response(new ResponseOptions({ body: { items } }));
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    repoService.search('angular 2').subscribe(_items => {
      expect(_items).toBe(items);
    });
  }));
});

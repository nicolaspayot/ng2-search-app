import {
  describe,
  it,
  expect,
  beforeEachProviders,
  inject
} from 'angular2/testing';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {Inject, provide} from 'angular2/core';
import {Http, BaseRequestOptions, Response, ResponseOptions} from 'angular2/http';
import {RepoService} from './repo.service';

describe('RepoService', () => {

  beforeEachProviders(() => [
    RepoService,
    MockBackend,
    BaseRequestOptions,
    provide('API_URL', {
      useValue: 'https://api.github.com/search'
    }),
    provide(Http, {
      useFactory: (backend: MockBackend, defaultsOptions: BaseRequestOptions) =>
        new Http(backend, defaultsOptions),
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

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

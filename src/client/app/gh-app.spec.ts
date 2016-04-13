import {
  describe,
  it,
  expect,
  beforeEachProviders,
  injectAsync,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';

import {provide, Component, Input} from 'angular2/core';
import {Response, ResponseOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {GhApp} from './gh-app';
import {RepoService} from './repo/repo.service';
import {RepoComponent} from './repo/repo.component';
import {Repository} from './repo/repo';

class MockRepoService {
  search() {
    const items = ['repo1', 'repo2', 'repo3'];
    const response = new Response(new ResponseOptions({ body: { items } }));
    return Observable.of(response);
  }
}

@Component({
  selector: 'repository',
  template: ''
})
class MockRepoComponent {
  @Input() private data: Repository;
}

describe('App: GhApp', () => {

  // Mock version of providers in bootstrap
  // beforeEachProviders(() => [
  //   GhApp,
  //   provide(RepoService, { useClass: MockRepoService })
  // ]);

  it('should test something', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      // Override <repository> component before providers
      .overrideDirective(GhApp, RepoComponent, MockRepoComponent)
      // Mock version of providers for component
      .overrideProviders(GhApp, [
        provide(RepoService, { useClass: MockRepoService })
      ])
      .createAsync(GhApp).then((fixture: ComponentFixture) => {
        const element = fixture.nativeElement;
        fixture.detectChanges();
        expect(element.querySelectorAll('repository').length).toBe(3);
      });
  }));

});

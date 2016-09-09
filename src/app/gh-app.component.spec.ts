/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ReactiveFormsModule} from '@angular/forms';

import {GhAppComponent} from './gh-app.component';
import {SearchComponent} from './search/search.component';
import {SorterComponent} from './sorter/sorter.component';
import {Repository} from './repo/repo';
import {RepoService} from './repo/repo.service';

class MockRepoService {
  search() {
    const items = ['repo1', 'repo2', 'repo3'];
    return Observable.of(items);
  }
}

@Component({
  selector: 'gh-app-repository',
  template: ''
})
class MockRepoComponent {
  @Input() private data: Repository;
}

describe('App: GhApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GhAppComponent,
        SearchComponent,
        SorterComponent,
        MockRepoComponent
      ],
      providers: [
        { provide: RepoService, useClass: MockRepoService }
      ],
      imports: [ReactiveFormsModule]
    });
  });

  it('should display a list of repositories', async(() => {
    const fixture = TestBed.createComponent(GhAppComponent);
    const element = fixture.debugElement.nativeElement;
    const instance = fixture.debugElement.componentInstance;

    instance.search();
    fixture.detectChanges();

    expect(element.querySelectorAll('gh-app-repository').length).toBe(3);
  }));
});

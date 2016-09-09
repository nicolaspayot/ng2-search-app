import {TestBed, async} from '@angular/core/testing';

import {RepoComponent} from './repo.component';

describe('RepoComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoComponent]
    });
  });

  it('should display repository data', async(() => {
    const fixture = TestBed.createComponent(RepoComponent);
    const element = fixture.debugElement.nativeElement;
    const data = {
      id: 1,
      name: 'repo1',
      html_url: 'http://github.com/repo1',
      open_issues_count: 5,
      stargazers_count: 10,
      owner: {
        login: 'johnedoe',
        avatar_url: 'http://avatar/johndoe',
        html_url: 'http://github.com/johndoe'
      }
    };
    fixture.debugElement.componentInstance.data = data;
    fixture.detectChanges();

    expect(element.querySelectorAll('div')[0].textContent.trim()).toBe(data.name);
    expect(element.querySelectorAll('a')[0].getAttribute('href')).toBe(data.html_url);
    expect(element.querySelectorAll('a')[0].textContent).toBe(data.html_url);
    expect(element.querySelector('img').getAttribute('src')).toBe(data.owner.avatar_url);
  }));
});

import {
  describe,
  it,
  expect,
  injectAsync,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';
import {RepoComponent} from './repo.component';

describe('RepoComponent', () => {

  it('should display repository data', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(RepoComponent).then((fixture: ComponentFixture) => {
      const element = fixture.nativeElement;
      const data = {
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
      fixture.componentInstance.data = data;
      fixture.detectChanges();

      expect(element.querySelectorAll('div')[0].textContent.trim()).toBe(data.name);
      expect(element.querySelectorAll('a')[0].getAttribute('href')).toBe(data.html_url);
      expect(element.querySelectorAll('a')[0].textContent).toBe(data.html_url);
      expect(element.querySelector('img').getAttribute('src')).toBe(data.owner.avatar_url);
    });
  }));
});

import {
  describe,
  it,
  expect,
  injectAsync,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';

import {Component} from 'angular2/core';

import {SearchComponent} from './search.component';

@Component({
  selector: 'container',
  template: '<search (onSearch)="search($event)"></search>',
  directives: [SearchComponent]
})
class Container {
  search(terms) {}
}

describe('SearchComponent', () => {

  it('should emit an event on input', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(Container).then((fixture: ComponentFixture) => {

      const element = fixture.nativeElement;
      const instance = fixture.componentInstance;
      spyOn(instance, 'search');

      const input = element.querySelector('input');
      input.value = 'Angular 2';

      setTimeout(() => {
        expect(instance.search).toHaveBeenCalledWith('Angular 2');
      }, 100);
    });
  }));

});

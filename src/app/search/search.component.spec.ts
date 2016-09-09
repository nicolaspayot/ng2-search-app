import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {dispatchEvent} from '@angular/platform-browser/testing/browser_util';
import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from './search.component';

@Component({
  selector: 'gh-app-container',
  template: '<gh-app-search (onSearch)="search($event)"></gh-app-search>'
})
class ContainerComponent {
  search(terms) {
    console.log(terms);
  }
}

describe('SearchComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        SearchComponent
      ],
      imports: [ReactiveFormsModule]
    });
  });

  fit('should emit an event on input', fakeAsync(() => {
    const fixture = TestBed.createComponent(ContainerComponent);
    const element = fixture.debugElement.nativeElement;
    const instance = fixture.debugElement.componentInstance;
    spyOn(instance, 'search');

    const input = element.querySelector('input');
    input.value = 'Angular 2';
    dispatchEvent(input, 'input');
    tick();

    expect(instance.search).toHaveBeenCalledWith('Angular 2');
  }));

});

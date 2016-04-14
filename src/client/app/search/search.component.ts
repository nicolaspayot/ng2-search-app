import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'search',
  template: `
    <input
      type="text"
      placeholder="Search for GitHub repositories..."
      #search
      (input)="onChange(search.value)">
  `,
  styleUrls: ['app/search/search.css']
})
export class SearchComponent {
  @Output() private onSearch: EventEmitter<string> = new EventEmitter();

  onChange(terms: string): void {
    this.onSearch.emit(terms);
  }
}

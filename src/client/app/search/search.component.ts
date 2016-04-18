import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {Control} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search',
  template: `
    <input
      type="text"
      placeholder="Search for GitHub repositories..."
      [ngFormControl]="search">
  `,
  styleUrls: ['app/search/search.css']
})
export class SearchComponent implements OnInit {
  private search: Control = new Control();
  @Output() private onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.search.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((terms: string) => {
        this.onSearch.emit(terms);
      });
  }
}

import {Component} from 'angular2/core';

@Component({
  selector: 'sorter',
  template: `
    <div>
      <input type="radio" id="sort-by-issues" name="sort-by" value="ISSUES">
      <label for="sort-by-issues">sort by issues</label>
      <input type="radio" id="sort-by-stars" name="sort-by" value="STARS">
      <label for="sort-by-stars">sort by stars</label>
    </div>
  `,
  styleUrls: ['app/sorter/sorter.css']
})
export class SorterComponent {}

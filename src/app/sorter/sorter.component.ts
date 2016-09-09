import {Component} from '@angular/core';

@Component({
  selector: 'gh-app-sorter',
  template: `
    <div>
      <input type="radio" id="sort-by-issues" name="sort-by" value="ISSUES">
      <label for="sort-by-issues">sort by issues</label>
      <input type="radio" id="sort-by-stars" name="sort-by" value="STARS">
      <label for="sort-by-stars">sort by stars</label>
    </div>
  `,
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent {}

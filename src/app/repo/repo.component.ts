import {Component, Input} from '@angular/core';

import {Repository} from './repo';

@Component({
  selector: 'gh-app-repository',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  @Input() data: Repository;
}

import {Component, Input} from 'angular2/core';
import {Repository} from './repo';

@Component({
  selector: 'repository',
  templateUrl: 'app/repo/repo.html',
  styleUrls: ['app/repo/repo.css']
})
export class RepoComponent {
  @Input() private data: Repository;
}

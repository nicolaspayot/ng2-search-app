import {Component, OnInit} from 'angular2/core';
import {Response} from 'angular2/http';
import {RepoService} from './repo/repo.service';
import {Repository} from './repo/repo';
import {RepoComponent} from './repo/repo.component';

@Component({
  selector: 'gh-app',
  templateUrl: 'app/gh-app.html',
  styleUrls: ['app/gh-app.css'],
  providers: [RepoService],
  directives: [RepoComponent]
})
export class GhApp implements OnInit {

  private repositories: Repository[];

  constructor(private _repoService: RepoService) {}

  ngOnInit() {
    this._repoService.search('angular 2')
      .subscribe((response: Response) => {
        this.repositories = response.json().items;
      });
  }

  trackReposBy(index: number, repository: Repository): number {
    return repository.id;
  }
}

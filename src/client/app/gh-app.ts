import {Component, OnInit} from 'angular2/core';
import {Response} from 'angular2/http';
import {RepoService} from './repo.service';
import {Repository} from './repo';

@Component({
  selector: 'gh-app',
  templateUrl: 'app/gh-app.html',
  styleUrls: ['app/gh-app.css', 'app/repo.css'],
  providers: [RepoService]
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

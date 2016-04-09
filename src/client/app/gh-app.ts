import {Component, OnInit} from 'angular2/core';
import {Response} from 'angular2/http';
import {RepoService} from './repo.service';

@Component({
  selector: 'gh-app',
  templateUrl: 'app/gh-app.html',
  providers: [RepoService]
})
export class GhApp implements OnInit {

  private repositories: any[];
  constructor(private _repoService: RepoService) {}

  ngOnInit() {
    this._repoService.search('angular 2')
      .subscribe((response: Response) => {
        this.repositories = response.json().items;
      });
  }
}

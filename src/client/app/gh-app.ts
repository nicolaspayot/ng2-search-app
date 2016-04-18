import {Component} from 'angular2/core';
import {Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {RepoService} from './repo/repo.service';
import {Repository} from './repo/repo';
import {RepoComponent} from './repo/repo.component';
import {SearchComponent} from './search/search.component';

@Component({
  selector: 'gh-app',
  templateUrl: 'app/gh-app.html',
  styleUrls: ['app/gh-app.css'],
  providers: [RepoService],
  directives: [
    SearchComponent,
    RepoComponent
  ]
})
export class GhApp {

  private repositories: Observable<Repository[]>;

  constructor(private _repoService: RepoService) {}

  trackReposBy(index: number, repository: Repository): number {
    return repository.id;
  }

  search(terms: string): void {
    // With async pipe in template
    this.repositories = this._repoService.search(terms);
    // Without async pipe in template
    //this._repoService.search(terms).subscribe((items: Repository[]) => this.repositories = items);
  }
}

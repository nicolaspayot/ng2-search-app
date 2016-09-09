import {Component} from '@angular/core';
import {isArray} from '@angular/core/src/facade/lang';

import {RepoService} from './repo/repo.service';
import {Repository} from './repo/repo';

@Component({
  selector: 'gh-app',
  templateUrl: './gh-app.component.html',
  styleUrls: ['./gh-app.component.css']
})
export class GhAppComponent {

  private repositories: Repository[];

  constructor(private _repoService: RepoService) {}

  trackReposBy(index: number, repository: Repository): number {
    return repository.id;
  }

  search(terms: string): void {
    // With async pipe in template
    // this.repositories = this._repoService.search(terms);
    // Without async pipe in template
    this._repoService.search(terms)
      .subscribe((items: Repository[]) => this.repositories = items);
  }

  isListAvailable() {
    return isArray(this.repositories) && this.repositories.length > 0;
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {API_URL} from './shared/';
import {RepoService} from './repo/repo.service';
import {SearchComponent} from './search/search.component';
import {SorterComponent} from './sorter/sorter.component';
import {RepoComponent} from './repo/repo.component';

import { GhAppComponent } from './gh-app.component';

@NgModule({
  declarations: [
    GhAppComponent,
    SearchComponent,
    SorterComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    { provide: API_URL, useValue: 'https://api.github.com/search' },
    RepoService
  ],
  bootstrap: [GhAppComponent]
})
export class GhAppModule { }

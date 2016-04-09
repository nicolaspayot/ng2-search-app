import {bootstrap} from 'angular2/platform/browser';
import {provide} from'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {GhApp} from './app/gh-app';

bootstrap(GhApp, [
  provide('API_URL', { useValue: 'https://api.github.com/search' }),
  HTTP_PROVIDERS
]);

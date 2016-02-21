import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {StateList} from './services/statelist';

bootstrap(AppCmp, [
  ROUTER_PROVIDERS, MATERIAL_PROVIDERS, HTTP_PROVIDERS, StateList,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);

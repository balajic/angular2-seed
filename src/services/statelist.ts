import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class StateList {

  states: Object[];
  constructor(public http:Http) {
    http.get('http://108.35.124.68:5001/.jxo?state')
    .map(res => res.json())
    .subscribe( res => this.states = res
          , err => console.log('Error while retriving states:' + err)
     );
  }

  getStates(): any {
    return this.http.get('http://108.35.124.68:5001/.jxo?state')
    .map(res => res.json())
    .subscribe(
      res => console.log(res),
      err => console.log('couldn\'t connect!')
     );
  }
}

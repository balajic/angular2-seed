import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class StateList{
  constructor(public http:Http){}
  
  getStates(): any{
    return this.http.get("")
    .map(res => res.json)
    .subscribe(
      res => console.log(res),
      err => console.log("couldn't connect!")
     );
  }
}
import {Component} from 'angular2/core';
import {StateList} from '../../services/statelist';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
@Component({
  selector : '/query',
  templateUrl : './components/query/query.html',
  directives: [MATERIAL_DIRECTIVES]
})

export class QueryCmp {

  public states: string[] = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
      'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
      'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  public stateArr: Object[];

  constructor(public statelist:StateList) {
    statelist.getStates()
      .subscribe(res => this.stateArr = res, err => console.log('Unable to retrive State List'));
  }
}

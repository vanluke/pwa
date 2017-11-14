import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import ck from 'camelcase-keys';
import {ajax} from 'rxjs/observable/dom/ajax';

const request = options => ajax({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  ...options,
})
  .map(r => r.response)
  .map(r => (Array.isArray(r) ? r.map(e => ck(e, {deep: true})) : ck(r, {deep: true})));

export default request;

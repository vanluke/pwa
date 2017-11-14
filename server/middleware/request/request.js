import {ajax} from 'rxjs/observable/dom/ajax';
import Xhr2 from 'xhr2';

const request = options =>
  ajax({createXHR: () => new Xhr2(), ...options});

export default request;

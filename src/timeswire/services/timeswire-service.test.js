import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import nock from 'nock';
import config from 'middleware/config';
import {JSDOM} from 'jsdom';
import api from './timeswire-service';


const e = new JSDOM('', {url: 'http://0.0.0.0:3100/api/v0'});

const {endpoint, routes: {timeswire}} = config.api;

describe('Timeswire service', () => {
  window.XMLHttpRequest = e.window.XMLHttpRequest;
  afterEach(() => {
    nock.cleanAll();
  });

  it('should get timeswires', (done) => {
    const response = [{
      id: 1,
    }];
    const expected = [...response];

    nock(endpoint).get(`/${timeswire}`).reply(200, {response});

    api.getTimeswire()
      .subscribe((actual) => {
        expect(actual.response).toEqual(expected);
        done();
      }, (error) => {
        expect(error).toBeFalsy();
        done();
      });
  });
});

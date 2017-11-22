import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import nock from 'nock';
import ck from 'camelcase-keys';
import {JSDOM} from 'jsdom';
import request from './request';

const {window} = new JSDOM('', {url: 'https://server.com'});

describe('Request', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should handle request', (done) => {
    const input = [{
      slug_name: 'slNam',
      standard_ball: 'ball',
    }];

    nock('https://server.com').get('/abc').reply(200, {value: input});
    const response = request({
      url: 'https://server.com/abc',
      crossDomain: true,
      createXHR: () => new window.XMLHttpRequest(),
    });

    const expected = input.map(e => ck(e, {deep: true}));

    response
      .subscribe(({value}) => {
        expect(value).toEqual(expected);
        done();
      }, (error) => {
        expect(error).toBeFalsy();
        done();
      });
  });
});

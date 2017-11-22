import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import request from '../middleware/request';

const api = {
  getTimeswire(url) {
    return request({
      method: 'get',
      url,
    }).map(r => r.response)
      .map(r => r.results);
  },
};

export default api;

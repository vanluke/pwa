import config from 'middleware/config';
import request from 'middleware/request';

const {endpoint, routes: {timeswire}} = config.api;

const timeswireService = {
  getTimeswire() {
    return request({
      url: `${endpoint}${timeswire}`,
      method: 'get',
    });
  },
};

export default timeswireService;

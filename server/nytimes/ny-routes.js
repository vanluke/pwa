import api from './ny-api';
import config from '../config';

const {ny} = config.get('api');

const routes = router => router.get('/ny', (req, res) => {
  const url = `${ny.url}?api-key=${ny.key}`;
  api.getTimeswire(url)
    .subscribe(timeswire => res.status(201).json(timeswire));
});

export default routes;

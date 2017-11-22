import config from '../config';

const version = config.get('version');

export default router => (app) => {
  app.use(`/api/v${version}`, router);

  return router;
};

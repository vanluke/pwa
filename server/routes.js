import ny from './nytimes/ny-routes';

const routes = (router) => {
  console.log(router, 'em');
  const r = ny(router);

  return r;
};

export default routes;

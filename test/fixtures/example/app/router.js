'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/render', app.controller.render.reactServerRender);
  router.get('/renderClient', app.controller.render.reactClientRender);
  router.get('/nunjucks', app.controller.render.reactNunjucksRender);
};

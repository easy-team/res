'use strict';
module.exports = () => {
  return async function(ctx, next) {
    ctx.locals.title = 'res';
    await next();
  };
};

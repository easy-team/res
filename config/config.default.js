'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {};

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  /**
   * cookie secret key
   */
  config.keys = appInfo.name + '_123456';

  /**
   * vue ssr plugin config
   * @member Config#vuessr
   * @property {String} layout - client render default html layout file path
   * @property {renderOptions} Object - vue server side render options
   */
  config.reactssr = {
    layout: path.resolve(__dirname, '../app/web/view/layout.html'),
  };

  return config;
};

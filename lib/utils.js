'use strict';
const path = require('path');
const fs = require('fs');
exports.getCli = () => {
  return { name: 'res-cli', cmd: 'res', package: '@easy-team/res-cli' };
};
exports.getWebpackConfig = appInfo => {
  const cli = exports.getCli();
  const filepath = path.join(appInfo.baseDir, 'node_modules', cli.package);
  const cwdFilepath = path.join(process.cwd(), 'node_modules', cli.package);
  if (fs.existsSync(filepath) || fs.existsSync(cwdFilepath)) {
    const resCli = require(cli.package);
    return resCli.getWebpackConfig();
  }
  return [];
};

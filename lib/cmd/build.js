const writeFile = require('write');
const logger = require('../core/logger');
const { build } = require('../core/docker');

exports.action = ({ name, dockerfile, app }) => {
  logger.info('Build started: this process may take some time to complete');

  return build(dockerfile, app, name)
    .then(() => {
      writeFile('name', null);
      logger.info(`Build completed. Start an instance with 'run ${name}'`);
    })
    .catch((err) => logger.error(err));
};

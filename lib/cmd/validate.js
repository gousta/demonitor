const logger = require('../core/logger');
const { getContainerIds } = require('../core/docker');

exports.action = ({ name }) => {
  return getContainerIds(name)
    .then((containerIds) => logger.info(`${containerIds.length} instances running [${containerIds.join(', ')}]`))
    .catch((err) => logger.error(err));
};

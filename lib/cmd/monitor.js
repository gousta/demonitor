const logger = require('../core/logger');
const { getContainerIds, stats } = require('../core/docker');

exports.action = ({ name }) => {
  return getContainerIds(name)
    .then((containerIds) => stats(containerIds))
    .then(({ raw }) => logger.log(raw))
    .catch((err) => logger.error(err));
};

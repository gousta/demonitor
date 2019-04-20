const logger = require('../core/logger');
const { getContainerIds, containersKill } = require('../core/docker');

exports.action = ({ name }) => {
  return getContainerIds(name)
    .then((containerIds) => {
      if (containerIds && containerIds.length > 0) {
        return containersKill(containerIds);
      }

      return Promise.resolve();
    })
    .then((res) => {
      if (res && res.raw) {
        logger.log('Killed instances:');
        logger.log(res.raw);
      } else {
        logger.log('No instances to kill');
      }
    })
    .catch((err) => logger.error(err));
};

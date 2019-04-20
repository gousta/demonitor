
const logger = require('../core/logger');
const { containerStart } = require('../core/docker');

exports.action = ({ name, options: { instances = 1 } }) => {
  if (instances > 5) {
    logger.warn('Not that many at once... I can do up to 5 at once.');
    return Promise.resolve();
  }

  const machines = Array.from(Array(instances)).map(() => containerStart(name));

  return Promise
    .all(machines)
    .then((res) => {
      logger.log(`Started ${instances} instance(s):`);
      res.map((r) => logger.log(`- ${r.containerId}`));
    })
    .catch((err) => logger.error(err));
};

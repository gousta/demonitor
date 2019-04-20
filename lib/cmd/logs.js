const writeFile = require('write');
const moment = require('moment');
const logger = require('../core/logger');
const { ps, logs } = require('../core/docker');

const generateFileName = (name) => `${name}_${moment().format('YYYYMMDD')}.log`;

exports.action = ({ name }) => {
  const fileName = generateFileName(name);

  return ps(name)
    .then(({ containerList }) => {
      if (!containerList || containerList.length === 0) {
        logger.log('No containers found');
        return null;
      }

      return Promise.all(containerList.map((c) => {
        return logs(c['container id'], `${c.names}[${c['container id']}]`);
      }));
    })
    .then((res) => {
      if (res) {
        const allLogs = res.map((l) => l.raw).join('\n');

        return writeFile(fileName, allLogs);
      }

      return null;
    })
    .then((result) => {
      if (result) {
        logger.info(`Logs saved in ${fileName}`);
      }
    })
    .catch((err) => logger.error(err));
};

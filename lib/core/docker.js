/* eslint-disable implicit-arrow-linebreak */
const { Docker } = require('docker-cli-js');
const shortid = require('shortid');
const { appName } = require('../../config.json');

const docker = new Docker();

const genID = () => shortid.generate();

exports.getImages = () =>
  docker.command(`images --filter "label=${appName}"`);

exports.ps = (name) =>
  docker.command(`ps --filter "name=${appName}-${name}"`);

exports.build = (dockerfile, app, name) =>
  docker.command(`build -t ${name} -f ${dockerfile} ${app} --label ${appName}`);

exports.containersKill = (containerIds) =>
  docker.command(`stop ${containerIds.join(' ')}`);

exports.containersStop = (containerIds) =>
  docker.command(`stop ${containerIds.join(' ')}`);

exports.stats = (containerIds) =>
  docker.command(`stats --no-stream ${containerIds.join(' ')}`);

exports.containerStart = (name) =>
  docker.command(`run -P --detach -it --rm --log-driver json-file --name ${appName}-${name}-${genID()} ${name}`);

exports.logs = (containerId, prefix) =>
  docker.command(`logs -t --details ${containerId} | sed -ne 's/  / ${prefix}:&/p'`);

exports.getContainerIds = (name) => exports.ps(name).then(({ containerList }) => {
  return containerList.map((c) => c['container id']);
});

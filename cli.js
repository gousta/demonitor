const vorpal = require('vorpal')();
const Build = require('./lib/cmd/build');
const Run = require('./lib/cmd/run');
const Kill = require('./lib/cmd/kill');
const Validate = require('./lib/cmd/validate');
const Monitor = require('./lib/cmd/monitor');
const Logs = require('./lib/cmd/logs');
const Config = require('./config.json');

vorpal.delimiter(`${Config.appName}$`).show();

vorpal
  .command('build <name> <dockerfile> <app>', 'Build a Docker Image from a given Dockerfile and an application')
  .action(Build.action);

vorpal
  .command('run <name>', 'Start one or more instances of an application')
  .option('--instances <instances>', 'Number of instances')
  .action(Run.action);

vorpal
  .command('kill <name>', 'Kill all instances of an application')
  .action(Kill.action);

vorpal
  .command('validate <name>', 'Validate that the container instances are running')
  .action(Validate.action);

vorpal
  .command('monitor <name>', 'Monitor the resource usage of each container (CPU, I/O, etc)')
  .action(Monitor.action);

vorpal
  .command('logs <name>', 'Consolidate the log output of all the container instances into one centralized log file')
  .action(Logs.action);

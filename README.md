# node-deploy-monitor

## Objectives & Capabilities
- Build a Docker Image from a given Dockerfile and an application (a simple ‘Hello world’ web app would be fine)
- Start a few instances of the Docker Image in different containers
- Validate that the container instances are running
- Monitor the resource usage of each container (CPU, I/O, etc)
- Consolidate the log output of all the container instances into one centralized log file.
- (extra) Kill all running/stopped processes of a Docker Image

### CLI tool demo:
For CLI to work, you need to install a couple of deps using `yarn install` in the root directory.
Then just execute `node cli.js` to get started.

##### Build
```
build test1 ./sample/Dockerfile ./sample
```

##### Run
```
run test1 --instances 2 # Docker on Mac struggles for minutes if I put more than 5, so I put a limit. Also, instances is optional, default is 1.
```

##### Validate
```
validate test1
```

##### Monitor
```
monitor test1
```

##### Logs
```
logs test1
```

##### (EXTRA) Kill
```
kill test1 # This will kill all instances
```

### Bonus: GUI!
To get the GUI up, you need to install some extra deps:
1. cd to `gui` directory
2. Run `yarn install`
3. Run `yarn start` to get it up an running (visit http://localhost:3000 if it doesn't open automatically)

The GUI is only able to show and kill containers, so make sure you start some first from the CLI!

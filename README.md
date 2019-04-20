# Demonitor

### CLI tool demo:

#### Setup

- In the root directory, run: `yarn install`
- Run `node cli.js` to get started

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

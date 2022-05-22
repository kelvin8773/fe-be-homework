# Frontend Homework Project

## To Start project

### Setp One - Install dependances

```bash
$ yarn
```

### Step Two - Bring Up Mock Server

- API server will hosted in `http://localhost:9000/api`

```bash
$ yarn run mock
```

### Step Three - Run Local Dev Server for Development

- server will hosted in `http://localhost:3000`

```bash
$ yarn start
```

## Run Test

### Run unit test

- **Please Note:**
  Local unit test for Mithril Compnent still failling, will fix later.

```bash
$ yarn run test
```

or

```bash
$ yarn run test --watch
```

### Run End to end Test

- **Please Note:**
  Before run End to end test, make sure you have playwright install correctly in your local machine.
  [Installation Guide](https://playwright.dev/docs/intro#installation)

```bash
$ yarn run e2e
```

## Build for Production

### Setp One - Local build

```bash
$ yarn run build
```

### Setp Two - Build new docker Image

- **Please Note:**
  Please make sure you have docker installled in your machine before run the command.

```bash
$ yarn run docker:build
```

### Setp Three - Run the docker

- Docker Server will serve in `http://localhost:1080`

```bash
$ yarn run docker:run
```

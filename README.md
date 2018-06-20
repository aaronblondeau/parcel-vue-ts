# Vue.js + TypeScript + Parcel Project Template

This project contains an example configuration for a Vue.js application that is written in TypeScript, built with Parcel, and tested with Cypress.

## Dev Setup

```
npm install
npm install -g parcel-bundler
parcel src/index.html
```

## Prod Build

```
parcel build src/index.html
```

## Run Unit Tests

TODO

## Write/Run Integration Tests

Begin by running the parcel command to start serving the project locally on port 1234.

Then export an env var for the Cypress baseUrl

```
export CYPRESS_baseUrl=http://localhost:1234
```

or in PowerShell

```
$env:CYPRESS_baseUrl = "http://localhost:1234"
```

Then launch Cypress to run tests

```
./node_modules/.bin/cypress open
```

### VSCode TSLint Setup

Install the "TSLint" and "TSLint Vue" extensions.

To run tslint manually (doesn't lint in .vue files yet)

```
npm install -g tslint typescript
tslint -p .
```

# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Hosted at https://dev.kilt.io

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Test

```
yarn test [dapp,workshop,core,staking]
```

Tests for code examples are located at `code_examples`.
If possible code for new sections should be added to the `sdk_examples` project as a subcommand.
When a subcommand is added, it also needs to be added to the [test setup](.github/workflows/test.yml) so that it will get executed.

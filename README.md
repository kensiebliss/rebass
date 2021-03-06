# Yarn workspaces example

Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

In this example we have three workspaces:

- **web-app**: A Next.js app
- **foo**: A normal node module
- **bar**: A react component, that gets compiled by Next.js (see [packages/web-app/next.config.js](./packages/web-app/next.config.js) for more info)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/sedative)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example sedative sedative-app
# or
yarn create next-app --example sedative sedative-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

> Choose `packages/web-app` as root directory when deploying.

## Useful Links

- [Documentation](https://yarnpkg.com/en/docs/workspaces)
- [yarn workspaces](https://yarnpkg.com/lang/en/docs/cli/workspace)
- [yarn workspace](https://yarnpkg.com/lang/en/docs/cli/workspaces)
- [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules)

---

## Sedative Client

### scripts

```
  "build": "microbundle-crl --no-compress --format modern,cjs",
  "start": "microbundle-crl watch --no-compress --format modern,cjs",
  "prepare": "run-s build",
  "test": "run-s test:unit test:lint test:build",
  "test:build": "run-s build",
  "test:lint": "eslint .",
  "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
  "test:watch": "react-scripts test --env=jsdom",
  "predeploy": "cd example && yarn install && yarn run build",
  "deploy": "gh-pages -d example/build"
```

## Candy

### scripts

```
  "build": "microbundle-crl --no-compress --format modern,cjs",
  "start": "microbundle-crl watch --no-compress --format modern,cjs",
  "prepare": "run-s build",
  "test": "run-s test:unit test:lint test:build",
  "test:build": "run-s build",
  "test:lint": "eslint .",
  "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
  "test:watch": "react-scripts test --env=jsdom",
  "predeploy": "cd example && yarn install && yarn run build",
  "deploy": "gh-pages -d example/build"
```

## Sedative Services

### scripts

```
  "build": "microbundle-crl --no-compress --format modern,cjs",
  "start": "microbundle-crl watch --no-compress --format modern,cjs",
  "prepare": "run-s build",
  "test": "run-s test:unit test:lint test:build",
  "test:build": "run-s build",
  "test:lint": "eslint .",
  "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
  "test:watch": "react-scripts test --env=jsdom",
  "predeploy": "cd example && yarn install && yarn run build",
  "deploy": "gh-pages -d example/build"
```
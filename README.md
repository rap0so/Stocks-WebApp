<h1 align="center">Stocks WebApp 📈</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Stocks WebApp is a ReactJs client that consumes example stocks data.

## Install

```sh
yarn install
```

## Configure keys

```sh
cp .env.example .env.local
nano .env.local

# put your server endpoint url on REACT_APP_SERVER_ENDPOINT
```

## Usage

```sh
yarn start
```

## Tests

```sh
# regular test
yarn test

# test in watch mode
yarn test:watch

# coverage
yarn test:cov
```

## E2E tests

```sh
# headless browser
yarn test:e2e

# running on chrome
yarn test:e2e:browser
```

## Build

```sh
# build for production
yarn build

# analyzing bundle size
yarn analyze
```

## Lint

```sh
# check lint issues
yarn lint

# fix lint issues
yarn lint:fix
```

## TODO:

- [ ] add e2e tests
- [ ] change throttle time based on user usage
- [ ] type server
- [ ] add unit tests to non components
- [ ] fragment code from home to providers
- [ ] find a alternative to apex that can handle multiple series easily

## Build with

- [cra](https://create-react-app.dev) - Most common boilerplate to start react
  projects
- [styled-components](https://www.styled-components.com) - Custom UI components
  with props based on scales
- [styled-system](https://styled-system.com) - Collection of functions to add
  style props to components
- [typescript](https://www.typescriptlang.org) - JavaScript extention to add
  types to the language
- [cypress](https://www.cypress.io/) - Created to easily test end to end
  front-end
- [socket.io](https://socket.io/) - Enables real-time, bidirectional and
  event-based communication

## Author

👤 **William G.**

- Website: https://www.linkedin.com/in/william-godoy-4bb919b5/
- Github: [@rap0so](https://github.com/rap0so)
- LinkedIn:
  [@william-godoy-4bb919b5](https://linkedin.com/in/william-godoy-4bb919b5)

## 📝 License

Copyright © 2020 [William G.](https://github.com/rap0so).<br /> This project is
[MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

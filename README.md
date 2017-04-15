# React Native Scaffold

A React Native scaffod featuring Redux and React Navigation

### Features

- [Redux](https://github.com/reactjs/redux)
- [React Navigation](https://github.com/react-community/react-navigation)
- [React Native i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [ESLint](https://github.com/eslint/eslint)
- [Node HTTP Status](https://github.com/adaltas/node-http-status)

### NPM Scripts

- `npm start` - Starts JS server
- `npm run lint` - Runs the `ESLint` linter
- `npm run test` - Invokes Jest test runner

### Installation

#### Prerequisites
This project depends on [Node.js](https://nodejs.org) and `react-native-cli`. The `Node.js` installation method varies from platform to platform.

If you are using a Debian distribution, please follow the steps below,

```sh
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Or, if you are using some other linux distribution or a different platform, please follow the instruction provided [here](https://nodejs.org/en/download/package-manager/).

`react-native-cli` module requires a global installation.

```sh
$ sudo npm install -g react-native-cli
```

Now, change CWD to project root and install dependency modules.
```sh
$ npm install
```

#### Development
Create a configuration file by copying `application.json.example` as `application.json` (located in `app/config`)

Now, start the JS server.

```sh
$ react-native start
```

And, finally deploy the development app. to a device / emulator using,

```sh
$ react-native run-android
$ react-native run-ios
```

#### Production

TODO

### License

MIT

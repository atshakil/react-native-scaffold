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

Create a gradle property file by renaming `gradle.properties.example` as `gradle.properties` (located in `android/`)

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

One way of logging is to use any of the following commands

```sh
$ react-native log-android
$ react-native log-ios
```

#### Production

##### Android

Create a keystore for the production app signing. You may update the available parameters (e.g. keystore name, alias, validity) to fit your requirement.

```
keytool -genkey -v -keystore primary-release-key.keystore -alias keystore_alias -keyalg RSA -keysize 2048 -validity 10000
```

Now copy the keystore file to `android/app` directory.

In the global `gradle.properties` file (located in `android/` directory), update the `STORE_PASSWORD`, `KEY_PASSWORD`, `KEY_ALIAS` and `STORE_FILE` parameter with your keystore parameters.

Finally generate the release build using,

```
react-native run-android --flavor=release
```

which generates a release apk in `android/app/build/outputs/apk` directory.

##### iOS

TODO

### License

MIT

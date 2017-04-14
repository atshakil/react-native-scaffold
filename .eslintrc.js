module.exports = {
  "parser": "babel-eslint",

  "ecmaFeatures": {
    "jsx": true
  },

  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },

  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },

  "plugins": [
    "react",
    "react-native"
  ],

  "globals": {
    "define": true
  },

  "rules": {
    "strict": ["error", "global"],
    "no-unused-vars": ["warn",
      { "vars": "all", "args": "none", "caughtErrors": "none" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "camelcase": ["error", { "properties": "always" }],
    "consistent-return": "error",
    "arrow-spacing": "error",
    "arrow-parens": ["off", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "semi": ["error", "always"],
    "max-len": ["warn", { "tabWidth": 2 }],
    "no-confusing-arrow": ["off", { "allowParens": false }],
    "no-constant-condition": "error",
    "no-labels": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "func-style": "off",
    "react/display-name": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-indent-props": "off",
    "react/jsx-key": "warn",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-pascal-case": "warn",
    "react/jsx-sort-prop-types": "off",
    "react/jsx-sort-props": "off",
    "react/no-multi-comp": "warn",
    "react/no-set-state": "off",
    "react/prefer-es6-class": "off",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn"
  }
};

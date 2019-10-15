module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb/hooks", "prettier"],
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "react-hooks", "prettier",
    ],
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prettier/prettier": ["error"],
    },
};
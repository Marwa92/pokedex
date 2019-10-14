module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb/hooks",
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
        "react-hooks",
    ],
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },

};
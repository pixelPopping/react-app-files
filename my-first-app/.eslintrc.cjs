module.exports = {
  root: true,
  env: { browser: true, es2020: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:react/jsx-runtime"
  ],
      "env": {
        "browser": true,
        "es2021": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
      ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
      },
      "plugins": ["react"],
      "rules": {
        "react/prop-types": 0
      }
    }

  

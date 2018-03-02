module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-animator-css",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-firebase",
        "aurelia-framework",
        "aurelia-history-browser",
        "aurelia-http-client",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-pal-browser",
        "aurelia-polyfills",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "bluebird",
        "bootstrap",
        "clean-css",
        "css",
        "firebase",
        "font-awesome",
        "moment",
        "nprogress",
        "text",
        "bootstrap/css/bootstrap.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};

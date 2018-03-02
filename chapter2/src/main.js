export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    // Uncomment this if you want some development logs
    // .developmentLogging()
    .plugin('resources/index')
    .plugin('aurelia-animator-css');
  aurelia.start().then(() => aurelia.setRoot());
}

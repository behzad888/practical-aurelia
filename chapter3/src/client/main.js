export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    // Uncomment this if you want some development logs
    // .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-api', config => {
      config.registerEndpoint('api', 'http://localhost:3000/api/');
    });
  aurelia.start().then(() => aurelia.setRoot());
}

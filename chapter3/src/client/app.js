import 'bootstrap/css/bootstrap.min.css!';
import { inject } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia and Loopback';
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: 'customers/list', nav: true, title: 'Customers List' },
      { route: 'addorEdit:/id', name: 'addorEdit', moduleId: 'customers/addorEdit', nav: true, title: 'Customer Add/Edit' }
    ]);

    this.router = router;
  }
}

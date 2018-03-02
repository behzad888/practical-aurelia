// app.js
export class App {
  configureRouter(config, router) {
    config.title = 'Navigation Menu';
    // Define routes
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'navigation-menu/pages/home',      nav: true, title: 'Home' },
      { route: 'about',      name: 'about',     moduleId: 'navigation-menu/pages/about',     nav: true, title: 'About' },
      { route: 'contact',    name: 'contact',   moduleId: 'navigation-menu/pages/contact',   nav: true, title: 'Contact' }
    ]);

    this.router = router;
  }
}
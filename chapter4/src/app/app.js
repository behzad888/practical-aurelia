export class App {
   configureRouter(config, router) {
    config.title = 'Chapter4';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' },
      { route: 'secondPage', name: 'secondPage', moduleId: './secondPage', nav: false, title: 'Second Page' }
      { route: 'camera', name: 'camera', moduleId: './camera', nav: false, title: 'Take a photo' }
    ]);

    this.router = router;
  }  
}

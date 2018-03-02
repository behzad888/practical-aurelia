System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    // Uncomment the line below to enable animation.
    // aurelia.use.plugin('aurelia-animator-css');
    // if the css animator is enabled, add swap-order="after" to all router-view elements

    // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    // aurelia.use.plugin('aurelia-html-import-template-loader')
    aurelia.start().then(function () {
      return aurelia.setRoot('app');
    });

    // if you would like your website to work offline (Service Worker),
    // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
    /*
    const offline = await System.import('offline-plugin/runtime');
    offline.install();
    */
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUFDOzs7Ozs7OztBQVF4QixXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FBQSxDQUFDLENBQUM7Ozs7Ozs7O0dBUXBEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcclxuICBhdXJlbGlhLnVzZVxyXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcblxyXG4gIC8vIFVuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBlbmFibGUgYW5pbWF0aW9uLlxyXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcclxuICAvLyBpZiB0aGUgY3NzIGFuaW1hdG9yIGlzIGVuYWJsZWQsIGFkZCBzd2FwLW9yZGVyPVwiYWZ0ZXJcIiB0byBhbGwgcm91dGVyLXZpZXcgZWxlbWVudHNcclxuXHJcbiAgLy8gQW55b25lIHdhbnRpbmcgdG8gdXNlIEhUTUxJbXBvcnRzIHRvIGxvYWQgdmlld3MsIHdpbGwgbmVlZCB0byBpbnN0YWxsIHRoZSBmb2xsb3dpbmcgcGx1Z2luLlxyXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1odG1sLWltcG9ydC10ZW1wbGF0ZS1sb2FkZXInKVxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgnYXBwJykpO1xyXG5cclxuICAvLyBpZiB5b3Ugd291bGQgbGlrZSB5b3VyIHdlYnNpdGUgdG8gd29yayBvZmZsaW5lIChTZXJ2aWNlIFdvcmtlciksIFxyXG4gIC8vIGluc3RhbGwgYW5kIGVuYWJsZSB0aGUgQGVhc3ktd2VicGFjay9jb25maWctb2ZmbGluZSBwYWNrYWdlIGluIHdlYnBhY2suY29uZmlnLmpzIGFuZCB1bmNvbW1lbnQgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gIC8qXHJcbiAgY29uc3Qgb2ZmbGluZSA9IGF3YWl0IFN5c3RlbS5pbXBvcnQoJ29mZmxpbmUtcGx1Z2luL3J1bnRpbWUnKTtcclxuICBvZmZsaW5lLmluc3RhbGwoKTtcclxuICAqL1xyXG59Il19

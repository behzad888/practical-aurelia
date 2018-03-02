System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Chapter4';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' }, { route: 'secondPage', name: 'secondPage', moduleId: './secondPage', nav: false, title: 'Second Page' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNFLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzFCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNuRixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxDQUN4RyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFUVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdDaGFwdGVyNCc7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnLi9ob21lJywgbmF2OiB0cnVlLCB0aXRsZTogJ0hvbWUnIH0sXHJcbiAgICAgIHsgcm91dGU6ICdzZWNvbmRQYWdlJywgbmFtZTogJ3NlY29uZFBhZ2UnLCBtb2R1bGVJZDogJy4vc2Vjb25kUGFnZScsIG5hdjogZmFsc2UsIHRpdGxlOiAnU2Vjb25kIFBhZ2UnIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH0gIFxyXG59XHJcbiJdfQ==

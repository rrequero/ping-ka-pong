System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Aurelia';
                        config.map([{ route: ['', 'home'], name: 'Home', moduleId: './home/home', nav: true, title: 'Home' }, { route: ['tournaments'], name: 'Tournaments', moduleId: './tournaments/tournaments', nav: true, title: 'Tournaments' }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRyxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxFQUN2RixFQUFFLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUcsUUFBUSxFQUFFLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGFBQWEsRUFBRSxDQUMxSCxDQUFDLENBQUM7O0FBRUgsNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN4Qjs7O3VCQVRRLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, Home;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            Home = (function () {
                function Home(http) {
                    _classCallCheck(this, _Home);

                    this.users = [];

                    this.http = http;
                }

                _createClass(Home, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        return this.http.get('/api/v1/user').then(function (response) {
                            _this.users = response.content;
                        });
                    }
                }]);

                var _Home = Home;
                Home = inject(HttpClient)(Home) || Home;
                return Home;
            })();

            _export('Home', Home);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsSUFBSTs7Ozs7Ozs7dUNBSlQsTUFBTTs7NENBQ04sVUFBVTs7O0FBR0wsZ0JBQUk7QUFJRix5QkFKRixJQUFJLENBSUQsSUFBSSxFQUFDOzs7eUJBRmpCLEtBQUssR0FBRyxFQUFFOztBQUdOLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDcEI7OzZCQU5RLElBQUk7OzJCQVFMLG9CQUFFOzs7QUFDTiwrQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Qsa0NBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7eUJBQzlCLENBQUMsQ0FBQztxQkFDQTs7OzRCQVpRLElBQUk7QUFBSixvQkFBSSxHQURoQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sSUFBSSxLQUFKLElBQUk7dUJBQUosSUFBSTs7OzRCQUFKLElBQUkiLCJmaWxlIjoiaG9tZS9ob21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
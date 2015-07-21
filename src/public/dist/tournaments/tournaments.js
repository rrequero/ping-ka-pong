System.register(['aurelia-framework', 'aurelia-http-client', '../services/TournamentService'], function (_export) {
    'use strict';

    var inject, HttpClient, TournamentService, Tournaments;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_servicesTournamentService) {
            TournamentService = _servicesTournamentService.TournamentService;
        }],
        execute: function () {
            Tournaments = (function () {
                function Tournaments(http, TournamentService) {
                    _classCallCheck(this, _Tournaments);

                    this.tournaments = [];

                    this.http = http;
                    this.TournamentService = TournamentService;
                }

                _createClass(Tournaments, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        this.TournamentService.get().then(function (response) {
                            return _this.tournaments = response.contents;
                        });
                    }
                }]);

                var _Tournaments = Tournaments;
                Tournaments = inject(HttpClient, TournamentService)(Tournaments) || Tournaments;
                return Tournaments;
            })();

            _export('Tournaments', Tournaments);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdXJuYW1lbnRzL3RvdXJuYW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrQ0FLYSxXQUFXOzs7Ozs7Ozt1Q0FMaEIsTUFBTTs7NENBQ04sVUFBVTs7MkRBQ1YsaUJBQWlCOzs7QUFHWix1QkFBVztBQUlULHlCQUpGLFdBQVcsQ0FJUixJQUFJLEVBQUUsaUJBQWlCLEVBQUM7Ozt5QkFGcEMsV0FBVyxHQUFHLEVBQUU7O0FBR1osd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7aUJBQzlDOzs2QkFQUSxXQUFXOzsyQkFTWixvQkFBRTs7O0FBQ04sNEJBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO21DQUFJLE1BQUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRO3lCQUFBLENBQUMsQ0FBQztxQkFDdkY7OzttQ0FYUSxXQUFXO0FBQVgsMkJBQVcsR0FEdkIsTUFBTSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUN6QixXQUFXLEtBQVgsV0FBVzt1QkFBWCxXQUFXOzs7bUNBQVgsV0FBVyIsImZpbGUiOiJ0b3VybmFtZW50cy90b3VybmFtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
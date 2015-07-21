System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, TournamentService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            TournamentService = (function () {
                function TournamentService(http) {
                    _classCallCheck(this, _TournamentService);

                    this.url = 'api/v1/tournament';

                    this.http = http;
                }

                _createClass(TournamentService, [{
                    key: 'get',
                    value: function get() {
                        return this.http.get(this.url);
                    }
                }]);

                var _TournamentService = TournamentService;
                TournamentService = inject(HttpClient)(TournamentService) || TournamentService;
                return TournamentService;
            })();

            _export('TournamentService', TournamentService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvdXJuYW1lbnRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0QkFJYSxpQkFBaUI7Ozs7Ozs7O3VDQUp0QixNQUFNOzs0Q0FDTixVQUFVOzs7QUFHTCw2QkFBaUI7QUFJZix5QkFKRixpQkFBaUIsQ0FJZCxJQUFJLEVBQUM7Ozt5QkFGakIsR0FBRyxHQUFHLG1CQUFtQjs7QUFHckIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjs7NkJBTlEsaUJBQWlCOzsyQkFRdkIsZUFBRTtBQUNELCtCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbEM7Ozt5Q0FWUSxpQkFBaUI7QUFBakIsaUNBQWlCLEdBRDdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixpQkFBaUIsS0FBakIsaUJBQWlCO3VCQUFqQixpQkFBaUI7Ozt5Q0FBakIsaUJBQWlCIiwiZmlsZSI6InNlcnZpY2VzL1RvdXJuYW1lbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
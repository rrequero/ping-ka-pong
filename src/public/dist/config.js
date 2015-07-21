System.register(['aurelia-framework', 'aurelia-logging-console'], function (_export) {
    'use strict';

    var LogManager, ConsoleAppender;

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.defaultBindingLanguage().defaultResources().history().router().eventAggregator();

        aurelia.start().then(function (a) {
            return a.setRoot('app', document.body);
        });
    }

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
        }],
        execute: function () {

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.logLevel.info);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozt5QkFNZ0IsU0FBUzs7QUFBbEIsYUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQy9CLGVBQU8sQ0FBQyxHQUFHLENBQ04sc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsT0FBTyxFQUFFLENBQ1QsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQ2pCOztBQUVMLGVBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO21CQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDOUQ7Ozs7MkNBaEJPLFVBQVU7O3FEQUNWLGVBQWU7Ozs7QUFFdkIsc0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLHNCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
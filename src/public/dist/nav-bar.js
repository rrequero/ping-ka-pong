System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var bindable, useShadowDOM, NavBar;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            useShadowDOM = _aureliaFramework.useShadowDOM;
        }],
        execute: function () {
            NavBar = (function () {
                var _instanceInitializers = {};

                function NavBar() {
                    _classCallCheck(this, NavBar);

                    _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);
                }

                _createDecoratedClass(NavBar, [{
                    key: 'router',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                return NavBar;
            })();

            _export('NavBar', NavBar);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUdhLE1BQU07Ozs7Ozs7Ozs7eUNBSFgsUUFBUTs2Q0FBRSxZQUFZOzs7QUFHakIsa0JBQU07Ozt5QkFBTixNQUFNOzBDQUFOLE1BQU07Ozs7O3NDQUFOLE1BQU07O2lDQUNkLFFBQVE7OytCQUFVLElBQUk7Ozs7O3VCQURkLE1BQU07Ozs4QkFBTixNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
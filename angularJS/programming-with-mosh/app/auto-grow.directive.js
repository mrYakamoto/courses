System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                // angular will automatically inject instances of ElementRef and Renderer into this class under the names 'el' and 'renderer' (dependency injection)
                function AutoGrowDirective(el, renderer) {
                    this.renderer = renderer;
                    // the above variable declaration of _el and this line do the same thing as adding 'private' as done with renderer
                    this._el = el;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this._el.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this._el.nativeElement, 'width', '120');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        // brackets for any item with attribute autoGrow
                        selector: '[autoGrow]',
                        host: {
                            // parens here means we're binding the onFocus() method to the focus event
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map
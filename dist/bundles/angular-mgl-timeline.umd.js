(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-mgl-timeline', ['exports', '@angular/core', '@angular/animations', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-mgl-timeline'] = {}, global.ng.core, global.ng.animations, global.ng.common));
}(this, (function (exports, core, animations, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var MglTimelineEntryHeaderComponent = /** @class */ (function () {
        function MglTimelineEntryHeaderComponent() {
        }
        MglTimelineEntryHeaderComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline-entry-header',
                template: "<ng-content></ng-content>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline-entry-header{position:relative;display:block;overflow:hidden;padding:15px;text-align:center}"]
            })
        ], MglTimelineEntryHeaderComponent);
        return MglTimelineEntryHeaderComponent;
    }());

    var MglTimelineEntryDotComponent = /** @class */ (function () {
        function MglTimelineEntryDotComponent(animationBuilder, elementRef, renderer, changeDetectorRef, document) {
            this.animationBuilder = animationBuilder;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.changeDetectorRef = changeDetectorRef;
            this.document = document;
            this._expanded = false;
            this._alternate = false;
            this._mobile = false;
            this._size = 50;
            this.animationDone = new core.EventEmitter();
            this.clazz = 'primary';
        }
        Object.defineProperty(MglTimelineEntryDotComponent.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (size) {
                this._size = size;
                this.setStyle();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineEntryDotComponent.prototype, "alternate", {
            get: function () {
                return this._alternate;
            },
            set: function (alternate) {
                this._alternate = alternate;
                this.setStyle();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineEntryDotComponent.prototype, "mobile", {
            get: function () {
                return this._mobile;
            },
            set: function (mobile) {
                this._mobile = mobile;
                this.setStyle();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineEntryDotComponent.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (expanded) {
                var animate = this._expanded !== expanded;
                this._expanded = expanded;
                animate ? this.animate() : this.setStyle();
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineEntryDotComponent.prototype.ngAfterViewInit = function () {
            this.initialStyle = this.document.defaultView.getComputedStyle(this.elementRef.nativeElement);
            this.setStyle();
            this.changeDetectorRef.detectChanges();
        };
        MglTimelineEntryDotComponent.prototype.getCollapsedStyle = function () {
            return {
                top: '50%',
                left: (this.alternate || this.mobile) ? '-5px' : 'calc(100% + 5px)',
                width: this.size + 'px',
                height: this.size + 'px',
                opacity: 1,
                transform: 'translateY(-50%) translateX(-50%)',
                boxShadow: this.initialStyle && this.initialStyle.boxShadow,
                borderRadius: '100px'
            };
        };
        MglTimelineEntryDotComponent.prototype.getTransitionStyle = function () {
            return __assign(__assign({}, this.getCollapsedStyle()), { left: '50%', opacity: 0.5, boxShadow: 'none' });
        };
        MglTimelineEntryDotComponent.prototype.getExpandedStyle = function () {
            return __assign(__assign({}, this.getTransitionStyle()), { left: '0', transform: 'translateX(0) translateY(-50%)', width: '100%', height: '100%', opacity: 1, borderRadius: 0 });
        };
        MglTimelineEntryDotComponent.prototype.animate = function () {
            var _this = this;
            this.destroyAnimation();
            if (this.expanded) {
                this.animation = this.animationBuilder
                    .build([
                    animations.style(this.getCollapsedStyle()),
                    animations.animate('200ms ease', animations.style(this.getTransitionStyle())),
                    animations.animate('200ms ease', animations.style(this.getExpandedStyle())),
                ])
                    .create(this.elementRef.nativeElement);
                this.animation.onDone(function () { return _this.animationDone.emit({ toState: 'expanded' }); });
                this.animation.play();
            }
            else {
                this.animationBuilder;
                this.animation = this.animationBuilder
                    .build([
                    animations.style(this.getExpandedStyle()),
                    animations.animate('100ms ease', animations.style(this.getTransitionStyle())),
                    animations.animate('100ms ease', animations.style(this.getCollapsedStyle())),
                ])
                    .create(this.elementRef.nativeElement);
                this.animation.onDone(function () { return _this.animationDone.emit({ toState: 'collapsed' }); });
                this.animation.play();
            }
        };
        MglTimelineEntryDotComponent.prototype.setStyle = function () {
            var _this = this;
            this.destroyAnimation();
            var baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
            Object.keys(baseStyle).forEach(function (property) {
                _this.renderer.setStyle(_this.elementRef.nativeElement, property, baseStyle[property]);
            });
        };
        MglTimelineEntryDotComponent.prototype.destroyAnimation = function () {
            if (this.animation) {
                this.animation.destroy();
                delete this.animation;
            }
        };
        MglTimelineEntryDotComponent.ctorParameters = function () { return [
            { type: animations.AnimationBuilder },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        __decorate([
            core.Input('class'),
            core.HostBinding('class')
        ], MglTimelineEntryDotComponent.prototype, "clazz", void 0);
        __decorate([
            core.Input()
        ], MglTimelineEntryDotComponent.prototype, "size", null);
        MglTimelineEntryDotComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline-entry-dot',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline-entry-dot{display:block;position:absolute}"]
            }),
            __param(4, core.Inject(common.DOCUMENT))
        ], MglTimelineEntryDotComponent);
        return MglTimelineEntryDotComponent;
    }());

    var MglTimelineEntryContentComponent = /** @class */ (function () {
        function MglTimelineEntryContentComponent(elementRef, animationBuilder, renderer) {
            this.elementRef = elementRef;
            this.animationBuilder = animationBuilder;
            this.renderer = renderer;
            this.animationDone = new core.EventEmitter();
            this._expanded = false;
        }
        Object.defineProperty(MglTimelineEntryContentComponent.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (expanded) {
                this.contentHeight = this.elementRef.nativeElement.scrollHeight;
                var animate = this._expanded !== expanded;
                this._expanded = expanded;
                animate ? this.animate() : this.setStyle;
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineEntryContentComponent.prototype.ngAfterViewInit = function () {
            this.contentHeight = this.elementRef.nativeElement.scrollHeight;
            this.setStyle();
        };
        MglTimelineEntryContentComponent.prototype.getCollapsedStyle = function () {
            return {
                height: '0px'
            };
        };
        MglTimelineEntryContentComponent.prototype.getExpandedStyle = function () {
            return {
                height: this.contentHeight + 'px'
            };
        };
        MglTimelineEntryContentComponent.prototype.animate = function () {
            var _this = this;
            if (this.expanded) {
                var animation = this.animationBuilder
                    .build([
                    animations.style(this.getCollapsedStyle()),
                    animations.animate('100ms ease', animations.style(this.getExpandedStyle())),
                ])
                    .create(this.elementRef.nativeElement);
                animation.onDone(function () { return _this.animationDone.emit({ toState: 'expanded' }); });
                animation.play();
            }
            else {
                this.animationBuilder;
                var animation = this.animationBuilder
                    .build([
                    animations.style(this.getExpandedStyle()),
                    animations.animate('200ms ease', animations.style(this.getCollapsedStyle())),
                ])
                    .create(this.elementRef.nativeElement);
                animation.onDone(function () { return _this.animationDone.emit({ toState: 'collapsed' }); });
                animation.play();
            }
        };
        MglTimelineEntryContentComponent.prototype.setStyle = function () {
            var _this = this;
            var baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
            Object.keys(baseStyle).forEach(function (property) {
                _this.renderer.setStyle(_this.elementRef.nativeElement, property, baseStyle[property]);
            });
        };
        MglTimelineEntryContentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: animations.AnimationBuilder },
            { type: core.Renderer2 }
        ]; };
        MglTimelineEntryContentComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline-entry-content',
                template: "<div><ng-content></ng-content></div>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline-entry-content{position:relative;display:block;overflow:hidden}mgl-timeline-entry-content>div{padding:10px}"]
            })
        ], MglTimelineEntryContentComponent);
        return MglTimelineEntryContentComponent;
    }());

    var MglTimelineEntrySideComponent = /** @class */ (function () {
        function MglTimelineEntrySideComponent(elementRef) {
            this.elementRef = elementRef;
        }
        Object.defineProperty(MglTimelineEntrySideComponent.prototype, "alternate", {
            set: function (value) {
                this.elementRef.nativeElement.classList.toggle('alternate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineEntrySideComponent.prototype, "mobile", {
            set: function (value) {
                this.elementRef.nativeElement.classList.toggle('mobile', value);
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineEntrySideComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        MglTimelineEntrySideComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline-entry-side',
                template: "<ng-content></ng-content>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline-entry-side{position:absolute;top:0;left:100%;width:100%;text-align:center}mgl-timeline-entry-side.alternate{left:-100%}mgl-timeline-entry-side.mobile{display:none}"]
            })
        ], MglTimelineEntrySideComponent);
        return MglTimelineEntrySideComponent;
    }());

    var MglTimelineEntryComponent = /** @class */ (function () {
        function MglTimelineEntryComponent(elementRef) {
            this.elementRef = elementRef;
            this.subscriptions = [];
            this.focusOnOpen = false;
            this._mobile = false;
            this.changed = new core.EventEmitter();
            this.animationDone = new core.EventEmitter();
        }
        Object.defineProperty(MglTimelineEntryComponent.prototype, "expanded", {
            get: function () {
                return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
            },
            set: function (expanded) {
                if (this.dot && expanded) {
                    this.dot.expanded = expanded;
                }
                else {
                    this.content.expanded = expanded;
                }
                this.changed.emit(expanded);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineEntryComponent.prototype, "mobile", {
            set: function (value) {
                this.elementRef.nativeElement.classList.toggle('mobile', value);
                if (this.dot) {
                    this.dot.mobile = value;
                }
                if (this.side) {
                    this.side.mobile = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineEntryComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.dot) {
                this.subscriptions.push(this.dot.animationDone.subscribe(function (event) {
                    if (event.toState === 'expanded') {
                        _this.content.expanded = true;
                    }
                    else {
                        _this.animationDone.emit(event);
                    }
                }));
            }
            if (this.content) {
                this.subscriptions.push(this.content.animationDone.subscribe(function (event) {
                    if (_this.dot && event.toState === 'collapsed') {
                        _this.dot.expanded = false;
                    }
                    else {
                        if (_this.focusOnOpen) {
                            _this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
                        }
                        _this.animationDone.emit(event);
                    }
                }));
            }
        };
        Object.defineProperty(MglTimelineEntryComponent.prototype, "alternate", {
            set: function (value) {
                this.elementRef.nativeElement.classList.toggle('alternate', value);
                if (this.dot) {
                    this.dot.alternate = value;
                }
                if (this.side) {
                    this.side.alternate = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineEntryComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        };
        MglTimelineEntryComponent.prototype.collapse = function () {
            this.expanded = false;
        };
        MglTimelineEntryComponent.prototype.expand = function () {
            this.expanded = true;
        };
        MglTimelineEntryComponent.prototype.toggle = function (event) {
            var headerFound = this.containsInPath(event, 'mgl-timeline-entry-header');
            var dotFound = this.containsInPath(event, 'mgl-timeline-entry-dot');
            if (headerFound || dotFound) {
                this.expanded = !this.expanded;
            }
        };
        MglTimelineEntryComponent.prototype.containsInPath = function (mouseEvent, name) {
            var currentElem = mouseEvent.target;
            while (currentElem) {
                if (currentElem.localName === name) {
                    return true;
                }
                currentElem = currentElem.parentElement;
            }
            return false;
        };
        MglTimelineEntryComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.HostBinding('class.expanded')
        ], MglTimelineEntryComponent.prototype, "expanded", null);
        __decorate([
            core.Output('expand')
        ], MglTimelineEntryComponent.prototype, "changed", void 0);
        __decorate([
            core.Output()
        ], MglTimelineEntryComponent.prototype, "animationDone", void 0);
        __decorate([
            core.ContentChild(MglTimelineEntryContentComponent)
        ], MglTimelineEntryComponent.prototype, "content", void 0);
        __decorate([
            core.ContentChild(MglTimelineEntryHeaderComponent)
        ], MglTimelineEntryComponent.prototype, "header", void 0);
        __decorate([
            core.ContentChild(MglTimelineEntryDotComponent)
        ], MglTimelineEntryComponent.prototype, "dot", void 0);
        __decorate([
            core.ContentChild(MglTimelineEntrySideComponent)
        ], MglTimelineEntryComponent.prototype, "side", void 0);
        MglTimelineEntryComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline-entry',
                template: "<ng-content select=\"mgl-timeline-entry-side\"></ng-content>\r\n<div class=\"mgl-timeline-entry-card\">\r\n  <div class=\"mgl-timeline-entry-card-header\" (click)=\"toggle($event)\">\r\n    <ng-content select=\"mgl-timeline-entry-dot\"></ng-content>\r\n    <ng-content select=\"mgl-timeline-entry-header\"></ng-content>\r\n  </div>\r\n  <ng-content select=\"mgl-timeline-entry-content\"></ng-content>\r\n</div>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline-entry{display:block;position:relative;margin-bottom:50px;width:calc(50% - 5px)}mgl-timeline-entry.alternate{margin-left:calc(50% + 5px)}mgl-timeline-entry.mobile{width:calc(100% - 30px);margin-left:30px}mgl-timeline-entry .mgl-timeline-entry-card{background-color:#f0f0f0}mgl-timeline-entry .mgl-timeline-entry-card .mgl-timeline-entry-card-header{position:relative;background-color:#e6e6e6}"]
            })
        ], MglTimelineEntryComponent);
        return MglTimelineEntryComponent;
    }());

    var MglTimelineComponent = /** @class */ (function () {
        function MglTimelineComponent(elementRef, changeDetectorRef) {
            this.elementRef = elementRef;
            this.changeDetectorRef = changeDetectorRef;
            this.toggle = true;
            this.mobileWidthThreshold = 640;
            this.alternate = true;
            this.side = 'left';
            this._focusOnOpen = false;
            this.subscriptions = [];
        }
        Object.defineProperty(MglTimelineComponent.prototype, "mobile", {
            get: function () {
                return this.elementRef.nativeElement.classList.contains('mobile');
            },
            set: function (value) {
                this.content && this.content.forEach(function (entry) { return entry.mobile = value; });
                this.elementRef.nativeElement.classList.toggle('mobile', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MglTimelineComponent.prototype, "focusOnOpen", {
            get: function () {
                return this._focusOnOpen;
            },
            set: function (focusOnOpen) {
                this.content && this.content.forEach(function (entry) { return entry.focusOnOpen = focusOnOpen; });
                this._focusOnOpen = focusOnOpen;
            },
            enumerable: true,
            configurable: true
        });
        MglTimelineComponent.prototype.ngOnChanges = function (simpleChanges) {
            this.updateContent();
        };
        MglTimelineComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        };
        MglTimelineComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
            setTimeout(function () { return _this.updateContent(); });
            this.content.changes.subscribe(function (changes) {
                _this.updateContent();
            });
        };
        MglTimelineComponent.prototype.updateContent = function () {
            var _this = this;
            this.ngOnDestroy();
            if (this.content) {
                this.content.forEach(function (entry, index) {
                    if (_this.toggle) {
                        _this.subscriptions.push(entry.changed.subscribe(function (state) {
                            if (state === true) {
                                _this.content.filter(function (e) { return e !== entry; }).forEach(function (e) { return e.collapse(); });
                            }
                        }));
                    }
                    entry.alternate = _this.alternate ? (index % 2 !== 0) : (_this.side === 'right');
                    entry.mobile = _this.mobile;
                    entry.focusOnOpen = _this.focusOnOpen;
                });
            }
        };
        MglTimelineComponent.prototype.onResize = function (ev) {
            console.log(this.mobileWidthThreshold);
            this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
        };
        MglTimelineComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], MglTimelineComponent.prototype, "toggle", void 0);
        __decorate([
            core.Input()
        ], MglTimelineComponent.prototype, "mobileWidthThreshold", void 0);
        __decorate([
            core.Input()
        ], MglTimelineComponent.prototype, "alternate", void 0);
        __decorate([
            core.Input()
        ], MglTimelineComponent.prototype, "side", void 0);
        __decorate([
            core.Input()
        ], MglTimelineComponent.prototype, "focusOnOpen", null);
        __decorate([
            core.ContentChildren(MglTimelineEntryComponent)
        ], MglTimelineComponent.prototype, "content", void 0);
        __decorate([
            core.HostListener('window:resize', ['$event'])
        ], MglTimelineComponent.prototype, "onResize", null);
        MglTimelineComponent = __decorate([
            core.Component({
                selector: 'mgl-timeline',
                template: "<div class=\"mgl-timeline-line\"></div>\r\n<ng-content></ng-content>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["mgl-timeline{position:relative;display:block;padding:50px 0}mgl-timeline .mgl-timeline-line{position:absolute;top:0;height:100%;background-color:#a0a0a0;left:50%;width:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}mgl-timeline.mobile .mgl-timeline-line{left:20px;-webkit-transform:none;transform:none}"]
            })
        ], MglTimelineComponent);
        return MglTimelineComponent;
    }());

    var MglTimelineModule = /** @class */ (function () {
        function MglTimelineModule() {
        }
        MglTimelineModule = __decorate([
            core.NgModule({
                declarations: [
                    MglTimelineComponent,
                    MglTimelineEntryComponent,
                    MglTimelineEntryHeaderComponent,
                    MglTimelineEntrySideComponent,
                    MglTimelineEntryContentComponent,
                    MglTimelineEntryDotComponent
                ],
                exports: [
                    MglTimelineComponent,
                    MglTimelineEntryComponent,
                    MglTimelineEntryHeaderComponent,
                    MglTimelineEntrySideComponent,
                    MglTimelineEntryContentComponent,
                    MglTimelineEntryDotComponent
                ]
            })
        ], MglTimelineModule);
        return MglTimelineModule;
    }());

    exports.MglTimelineModule = MglTimelineModule;
    exports.ɵa = MglTimelineComponent;
    exports.ɵb = MglTimelineEntryComponent;
    exports.ɵc = MglTimelineEntryContentComponent;
    exports.ɵd = MglTimelineEntryHeaderComponent;
    exports.ɵe = MglTimelineEntryDotComponent;
    exports.ɵf = MglTimelineEntrySideComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-mgl-timeline.umd.js.map

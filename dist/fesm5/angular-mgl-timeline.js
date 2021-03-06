import { __decorate, __assign, __param } from 'tslib';
import { Component, ViewEncapsulation, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, Inject, Input, HostBinding, Output, ContentChild, ContentChildren, HostListener, NgModule } from '@angular/core';
import { style, animate, AnimationBuilder } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

var MglTimelineEntryHeaderComponent = /** @class */ (function () {
    function MglTimelineEntryHeaderComponent() {
    }
    MglTimelineEntryHeaderComponent = __decorate([
        Component({
            selector: 'mgl-timeline-entry-header',
            template: "<ng-content></ng-content>",
            encapsulation: ViewEncapsulation.None,
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
        this.animationDone = new EventEmitter();
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
                style(this.getCollapsedStyle()),
                animate('200ms ease', style(this.getTransitionStyle())),
                animate('200ms ease', style(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            this.animation.onDone(function () { return _this.animationDone.emit({ toState: 'expanded' }); });
            this.animation.play();
        }
        else {
            this.animationBuilder;
            this.animation = this.animationBuilder
                .build([
                style(this.getExpandedStyle()),
                animate('100ms ease', style(this.getTransitionStyle())),
                animate('100ms ease', style(this.getCollapsedStyle())),
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
        { type: AnimationBuilder },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    __decorate([
        Input('class'),
        HostBinding('class')
    ], MglTimelineEntryDotComponent.prototype, "clazz", void 0);
    __decorate([
        Input()
    ], MglTimelineEntryDotComponent.prototype, "size", null);
    MglTimelineEntryDotComponent = __decorate([
        Component({
            selector: 'mgl-timeline-entry-dot',
            template: "<ng-content></ng-content>\r\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["mgl-timeline-entry-dot{display:block;position:absolute}"]
        }),
        __param(4, Inject(DOCUMENT))
    ], MglTimelineEntryDotComponent);
    return MglTimelineEntryDotComponent;
}());

var MglTimelineEntryContentComponent = /** @class */ (function () {
    function MglTimelineEntryContentComponent(elementRef, animationBuilder, renderer) {
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.animationDone = new EventEmitter();
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
                style(this.getCollapsedStyle()),
                animate('100ms ease', style(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            animation.onDone(function () { return _this.animationDone.emit({ toState: 'expanded' }); });
            animation.play();
        }
        else {
            this.animationBuilder;
            var animation = this.animationBuilder
                .build([
                style(this.getExpandedStyle()),
                animate('200ms ease', style(this.getCollapsedStyle())),
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
        { type: ElementRef },
        { type: AnimationBuilder },
        { type: Renderer2 }
    ]; };
    MglTimelineEntryContentComponent = __decorate([
        Component({
            selector: 'mgl-timeline-entry-content',
            template: "<div><ng-content></ng-content></div>",
            encapsulation: ViewEncapsulation.None,
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
        { type: ElementRef }
    ]; };
    MglTimelineEntrySideComponent = __decorate([
        Component({
            selector: 'mgl-timeline-entry-side',
            template: "<ng-content></ng-content>",
            encapsulation: ViewEncapsulation.None,
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
        this.changed = new EventEmitter();
        this.animationDone = new EventEmitter();
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
        { type: ElementRef }
    ]; };
    __decorate([
        HostBinding('class.expanded')
    ], MglTimelineEntryComponent.prototype, "expanded", null);
    __decorate([
        Output('expand')
    ], MglTimelineEntryComponent.prototype, "changed", void 0);
    __decorate([
        Output()
    ], MglTimelineEntryComponent.prototype, "animationDone", void 0);
    __decorate([
        ContentChild(MglTimelineEntryContentComponent)
    ], MglTimelineEntryComponent.prototype, "content", void 0);
    __decorate([
        ContentChild(MglTimelineEntryHeaderComponent)
    ], MglTimelineEntryComponent.prototype, "header", void 0);
    __decorate([
        ContentChild(MglTimelineEntryDotComponent)
    ], MglTimelineEntryComponent.prototype, "dot", void 0);
    __decorate([
        ContentChild(MglTimelineEntrySideComponent)
    ], MglTimelineEntryComponent.prototype, "side", void 0);
    MglTimelineEntryComponent = __decorate([
        Component({
            selector: 'mgl-timeline-entry',
            template: "<ng-content select=\"mgl-timeline-entry-side\"></ng-content>\r\n<div class=\"mgl-timeline-entry-card\">\r\n  <div class=\"mgl-timeline-entry-card-header\" (click)=\"toggle($event)\">\r\n    <ng-content select=\"mgl-timeline-entry-dot\"></ng-content>\r\n    <ng-content select=\"mgl-timeline-entry-header\"></ng-content>\r\n  </div>\r\n  <ng-content select=\"mgl-timeline-entry-content\"></ng-content>\r\n</div>",
            encapsulation: ViewEncapsulation.None,
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
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], MglTimelineComponent.prototype, "toggle", void 0);
    __decorate([
        Input()
    ], MglTimelineComponent.prototype, "mobileWidthThreshold", void 0);
    __decorate([
        Input()
    ], MglTimelineComponent.prototype, "alternate", void 0);
    __decorate([
        Input()
    ], MglTimelineComponent.prototype, "side", void 0);
    __decorate([
        Input()
    ], MglTimelineComponent.prototype, "focusOnOpen", null);
    __decorate([
        ContentChildren(MglTimelineEntryComponent)
    ], MglTimelineComponent.prototype, "content", void 0);
    __decorate([
        HostListener('window:resize', ['$event'])
    ], MglTimelineComponent.prototype, "onResize", null);
    MglTimelineComponent = __decorate([
        Component({
            selector: 'mgl-timeline',
            template: "<div class=\"mgl-timeline-line\"></div>\r\n<ng-content></ng-content>",
            encapsulation: ViewEncapsulation.None,
            styles: ["mgl-timeline{position:relative;display:block;padding:50px 0}mgl-timeline .mgl-timeline-line{position:absolute;top:0;height:100%;background-color:#a0a0a0;left:50%;width:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}mgl-timeline.mobile .mgl-timeline-line{left:20px;-webkit-transform:none;transform:none}"]
        })
    ], MglTimelineComponent);
    return MglTimelineComponent;
}());

var MglTimelineModule = /** @class */ (function () {
    function MglTimelineModule() {
    }
    MglTimelineModule = __decorate([
        NgModule({
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

/**
 * Generated bundle index. Do not edit.
 */

export { MglTimelineModule, MglTimelineComponent as ɵa, MglTimelineEntryComponent as ɵb, MglTimelineEntryContentComponent as ɵc, MglTimelineEntryHeaderComponent as ɵd, MglTimelineEntryDotComponent as ɵe, MglTimelineEntrySideComponent as ɵf };
//# sourceMappingURL=angular-mgl-timeline.js.map

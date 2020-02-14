import { __assign, __decorate, __param } from "tslib";
import { Component, Input, HostBinding, ElementRef, EventEmitter, Output, AfterViewInit, Renderer2, ChangeDetectorRef, Inject, ViewEncapsulation } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
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
export { MglTimelineEntryDotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktZG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWdsLXRpbWVsaW5lLyIsInNvdXJjZXMiOlsic3JjL3RpbWVsaW5lL3RpbWVsaW5lLWVudHJ5LWRvdC90aW1lbGluZS1lbnRyeS1kb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQy9ELGFBQWEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUN2RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEzQztJQXFERSxzQ0FBb0IsZ0JBQWtDLEVBQVUsVUFBc0IsRUFDOUUsUUFBbUIsRUFBVSxpQkFBb0MsRUFDL0MsUUFBUTtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzlFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQy9DLGFBQVEsR0FBUixRQUFRLENBQUE7UUFyRDFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXhDLFVBQUssR0FBRyxTQUFTLENBQUM7SUEwQ29CLENBQUM7SUF2Q3ZDLHNCQUFJLDhDQUFJO2FBS1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFD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b3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0LCBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21nbC10aW1lbGluZS1lbnRyeS1kb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1lbnRyeS1kb3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLWVudHJ5LWRvdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1nbFRpbWVsaW5lRW50cnlEb3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hbHRlcm5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9tb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGluaXRpYWxTdHlsZTtcclxuICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSA1MDtcclxuICBwcml2YXRlIGFuaW1hdGlvbjtcclxuXHJcbiAgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoJ2NsYXNzJylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBjbGF6eiA9ICdwcmltYXJ5JztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2l6ZShzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBhbHRlcm5hdGUoYWx0ZXJuYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWx0ZXJuYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsdGVybmF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtb2JpbGUobW9iaWxlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9tb2JpbGUgPSBtb2JpbGU7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vYmlsZTtcclxuICB9XHJcblxyXG4gIHNldCBleHBhbmRlZChleHBhbmRlZDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgYW5pbWF0ZSA9IHRoaXMuX2V4cGFuZGVkICE9PSBleHBhbmRlZDtcclxuICAgIHRoaXMuX2V4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICBhbmltYXRlID8gdGhpcy5hbmltYXRlKCkgOiB0aGlzLnNldFN0eWxlKClcclxuICB9XHJcblxyXG4gIGdldCBleHBhbmRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbFN0eWxlID0gdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xsYXBzZWRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgIGxlZnQ6ICh0aGlzLmFsdGVybmF0ZSB8fCB0aGlzLm1vYmlsZSkgPyAnLTVweCcgOiAnY2FsYygxMDAlICsgNXB4KScsXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNpemUgKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSArICdweCcsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhpcy5pbml0aWFsU3R5bGUgJiYgdGhpcy5pbml0aWFsU3R5bGUuYm94U2hhZG93LFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMDBweCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VHJhbnNpdGlvblN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udGhpcy5nZXRDb2xsYXBzZWRTdHlsZSgpLFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICBib3hTaGFkb3c6ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFeHBhbmRlZFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udGhpcy5nZXRUcmFuc2l0aW9uU3R5bGUoKSxcclxuICAgICAgbGVmdDogJzAnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFuaW1hdGUoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lBbmltYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyXHJcbiAgICAgICAgLmJ1aWxkKFtcclxuICAgICAgICAgIHN0eWxlKHRoaXMuZ2V0Q29sbGFwc2VkU3R5bGUoKSksXHJcbiAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJywgc3R5bGUodGhpcy5nZXRUcmFuc2l0aW9uU3R5bGUoKSkpLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHRoaXMuZ2V0RXhwYW5kZWRTdHlsZSgpKSksXHJcbiAgICAgICAgXSlcclxuICAgICAgICAuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbi5vbkRvbmUoKCkgPT4gdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoeyB0b1N0YXRlOiAnZXhwYW5kZWQnIH0pKTtcclxuICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICAgIC5idWlsZChbXHJcbiAgICAgICAgICBzdHlsZSh0aGlzLmdldEV4cGFuZGVkU3R5bGUoKSksXHJcbiAgICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlJywgc3R5bGUodGhpcy5nZXRUcmFuc2l0aW9uU3R5bGUoKSkpLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMTAwbXMgZWFzZScsIHN0eWxlKHRoaXMuZ2V0Q29sbGFwc2VkU3R5bGUoKSkpLFxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcclxuICAgICAgdGhpcy5hbmltYXRpb24ub25Eb25lKCgpID0+IHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KHsgdG9TdGF0ZTogJ2NvbGxhcHNlZCcgfSkpO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlKCkge1xyXG4gICAgdGhpcy5kZXN0cm95QW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYXNlU3R5bGUgPSB0aGlzLmV4cGFuZGVkID8gdGhpcy5nZXRFeHBhbmRlZFN0eWxlKCkgOiB0aGlzLmdldENvbGxhcHNlZFN0eWxlKCk7XHJcbiAgICBPYmplY3Qua2V5cyhiYXNlU3R5bGUpLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcm9wZXJ0eSwgYmFzZVN0eWxlW3Byb3BlcnR5XSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lBbmltYXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICBkZWxldGUgdGhpcy5hbmltYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
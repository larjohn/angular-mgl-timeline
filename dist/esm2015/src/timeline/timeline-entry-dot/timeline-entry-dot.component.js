import { __decorate, __param } from "tslib";
import { Component, Input, HostBinding, ElementRef, EventEmitter, Output, AfterViewInit, Renderer2, ChangeDetectorRef, Inject, ViewEncapsulation } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
let MglTimelineEntryDotComponent = class MglTimelineEntryDotComponent {
    constructor(animationBuilder, elementRef, renderer, changeDetectorRef, document) {
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
    set size(size) {
        this._size = size;
        this.setStyle();
    }
    get size() {
        return this._size;
    }
    set alternate(alternate) {
        this._alternate = alternate;
        this.setStyle();
    }
    get alternate() {
        return this._alternate;
    }
    set mobile(mobile) {
        this._mobile = mobile;
        this.setStyle();
    }
    get mobile() {
        return this._mobile;
    }
    set expanded(expanded) {
        const animate = this._expanded !== expanded;
        this._expanded = expanded;
        animate ? this.animate() : this.setStyle();
    }
    get expanded() {
        return this._expanded;
    }
    ngAfterViewInit() {
        this.initialStyle = this.document.defaultView.getComputedStyle(this.elementRef.nativeElement);
        this.setStyle();
        this.changeDetectorRef.detectChanges();
    }
    getCollapsedStyle() {
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
    }
    getTransitionStyle() {
        return Object.assign(Object.assign({}, this.getCollapsedStyle()), { left: '50%', opacity: 0.5, boxShadow: 'none' });
    }
    getExpandedStyle() {
        return Object.assign(Object.assign({}, this.getTransitionStyle()), { left: '0', transform: 'translateX(0) translateY(-50%)', width: '100%', height: '100%', opacity: 1, borderRadius: 0 });
    }
    animate() {
        this.destroyAnimation();
        if (this.expanded) {
            this.animation = this.animationBuilder
                .build([
                style(this.getCollapsedStyle()),
                animate('200ms ease', style(this.getTransitionStyle())),
                animate('200ms ease', style(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            this.animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
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
            this.animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
            this.animation.play();
        }
    }
    setStyle() {
        this.destroyAnimation();
        const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
        Object.keys(baseStyle).forEach(property => {
            this.renderer.setStyle(this.elementRef.nativeElement, property, baseStyle[property]);
        });
    }
    destroyAnimation() {
        if (this.animation) {
            this.animation.destroy();
            delete this.animation;
        }
    }
};
MglTimelineEntryDotComponent.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export { MglTimelineEntryDotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktZG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWdsLXRpbWVsaW5lLyIsInNvdXJjZXMiOlsic3JjL3RpbWVsaW5lL3RpbWVsaW5lLWVudHJ5LWRvdC90aW1lbGluZS1lbnRyeS1kb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQy9ELGFBQWEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUN2RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEzQyxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQXFEdkMsWUFBb0IsZ0JBQWtDLEVBQVUsVUFBc0IsRUFDOUUsUUFBbUIsRUFBVSxpQkFBb0MsRUFDL0MsUUFBUTtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzlFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQy9DLGFBQVEsR0FBUixRQUFRLENBQUE7UUFyRDFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXhDLFVBQUssR0FBRyxTQUFTLENBQUM7SUEwQ29CLENBQUM7SUF2Q3ZDLElBQUksSUFBSSxDQUFDLElBQVk7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eEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN0RixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUVGLENBQUE7O1lBdEZ1QyxnQkFBZ0I7WUFBc0IsVUFBVTtZQUNwRSxTQUFTO1lBQTZCLGlCQUFpQjs0Q0FDeEUsTUFBTSxTQUFDLFFBQVE7O0FBMUNoQjtJQUZDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDZCxXQUFXLENBQUMsT0FBTyxDQUFDOzJEQUNIO0FBR2xCO0lBREMsS0FBSyxFQUFFO3dEQUlQO0FBbkJVLDRCQUE0QjtJQU54QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLHlDQUFrRDtRQUVsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztJQXdEQyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQXZETiw0QkFBNEIsQ0EySXhDO1NBM0lZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LFxyXG4gIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUtZW50cnktZG90JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUtZW50cnktZG90LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lbGluZS1lbnRyeS1kb3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYWx0ZXJuYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpbml0aWFsU3R5bGU7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb247XHJcblxyXG4gIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCdjbGFzcycpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgY2xhenogPSAncHJpbWFyeSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zaXplID0gc2l6ZTtcclxuICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWx0ZXJuYXRlKGFsdGVybmF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFsdGVybmF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hbHRlcm5hdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbW9iaWxlKG1vYmlsZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbW9iaWxlID0gbW9iaWxlO1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vYmlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2JpbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQ6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGFuaW1hdGUgPSB0aGlzLl9leHBhbmRlZCAhPT0gZXhwYW5kZWQ7XHJcbiAgICB0aGlzLl9leHBhbmRlZCA9IGV4cGFuZGVkO1xyXG4gICAgYW5pbWF0ZSA/IHRoaXMuYW5pbWF0ZSgpIDogdGhpcy5zZXRTdHlsZSgpXHJcbiAgfVxyXG5cclxuICBnZXQgZXhwYW5kZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxTdHlsZSA9IHRoaXMuZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sbGFwc2VkU3R5bGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICBsZWZ0OiAodGhpcy5hbHRlcm5hdGUgfHwgdGhpcy5tb2JpbGUpID8gJy01cHgnIDogJ2NhbGMoMTAwJSArIDVweCknLFxyXG4gICAgICB3aWR0aDogdGhpcy5zaXplICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUgKyAncHgnLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgICBib3hTaGFkb3c6IHRoaXMuaW5pdGlhbFN0eWxlICYmIHRoaXMuaW5pdGlhbFN0eWxlLmJveFNoYWRvdyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwcHgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRyYW5zaXRpb25TdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuZ2V0Q29sbGFwc2VkU3R5bGUoKSxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYm94U2hhZG93OiAnbm9uZSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXhwYW5kZWRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuZ2V0VHJhbnNpdGlvblN0eWxlKCksXHJcbiAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5kZXN0cm95QW5pbWF0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICAgIC5idWlsZChbXHJcbiAgICAgICAgICBzdHlsZSh0aGlzLmdldENvbGxhcHNlZFN0eWxlKCkpLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHRoaXMuZ2V0VHJhbnNpdGlvblN0eWxlKCkpKSxcclxuICAgICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh0aGlzLmdldEV4cGFuZGVkU3R5bGUoKSkpLFxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgLmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcclxuICAgICAgdGhpcy5hbmltYXRpb24ub25Eb25lKCgpID0+IHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KHsgdG9TdGF0ZTogJ2V4cGFuZGVkJyB9KSk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkJ1aWxkZXJcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbkJ1aWxkZXJcclxuICAgICAgICAuYnVpbGQoW1xyXG4gICAgICAgICAgc3R5bGUodGhpcy5nZXRFeHBhbmRlZFN0eWxlKCkpLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMTAwbXMgZWFzZScsIHN0eWxlKHRoaXMuZ2V0VHJhbnNpdGlvblN0eWxlKCkpKSxcclxuICAgICAgICAgIGFuaW1hdGUoJzEwMG1zIGVhc2UnLCBzdHlsZSh0aGlzLmdldENvbGxhcHNlZFN0eWxlKCkpKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLm9uRG9uZSgoKSA9PiB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdCh7IHRvU3RhdGU6ICdjb2xsYXBzZWQnIH0pKTtcclxuICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZSgpIHtcclxuICAgIHRoaXMuZGVzdHJveUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFzZVN0eWxlID0gdGhpcy5leHBhbmRlZCA/IHRoaXMuZ2V0RXhwYW5kZWRTdHlsZSgpIDogdGhpcy5nZXRDb2xsYXBzZWRTdHlsZSgpO1xyXG4gICAgT2JqZWN0LmtleXMoYmFzZVN0eWxlKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcHJvcGVydHksIGJhc2VTdHlsZVtwcm9wZXJ0eV0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95QW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgZGVsZXRlIHRoaXMuYW5pbWF0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
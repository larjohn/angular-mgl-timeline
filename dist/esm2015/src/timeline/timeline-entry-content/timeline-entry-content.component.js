import { __decorate } from "tslib";
import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, EventEmitter, ElementRef, AfterViewInit, Renderer2, ViewEncapsulation } from '@angular/core';
let MglTimelineEntryContentComponent = class MglTimelineEntryContentComponent {
    constructor(elementRef, animationBuilder, renderer) {
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.animationDone = new EventEmitter();
        this._expanded = false;
    }
    set expanded(expanded) {
        this.contentHeight = this.elementRef.nativeElement.scrollHeight;
        const animate = this._expanded !== expanded;
        this._expanded = expanded;
        animate ? this.animate() : this.setStyle;
    }
    get expanded() {
        return this._expanded;
    }
    ngAfterViewInit() {
        this.contentHeight = this.elementRef.nativeElement.scrollHeight;
        this.setStyle();
    }
    getCollapsedStyle() {
        return {
            height: '0px'
        };
    }
    getExpandedStyle() {
        return {
            height: this.contentHeight + 'px'
        };
    }
    animate() {
        if (this.expanded) {
            const animation = this.animationBuilder
                .build([
                style(this.getCollapsedStyle()),
                animate('100ms ease', style(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
            animation.play();
        }
        else {
            this.animationBuilder;
            const animation = this.animationBuilder
                .build([
                style(this.getExpandedStyle()),
                animate('200ms ease', style(this.getCollapsedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
            animation.play();
        }
    }
    setStyle() {
        const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
        Object.keys(baseStyle).forEach(property => {
            this.renderer.setStyle(this.elementRef.nativeElement, property, baseStyle[property]);
        });
    }
};
MglTimelineEntryContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: AnimationBuilder },
    { type: Renderer2 }
];
MglTimelineEntryContentComponent = __decorate([
    Component({
        selector: 'mgl-timeline-entry-content',
        template: "<div><ng-content></ng-content></div>",
        encapsulation: ViewEncapsulation.None,
        styles: ["mgl-timeline-entry-content{position:relative;display:block;overflow:hidden}mgl-timeline-entry-content>div{padding:10px}"]
    })
], MglTimelineEntryContentComponent);
export { MglTimelineEntryContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1nbC10aW1lbGluZS8iLCJzb3VyY2VzIjpbInNyYy90aW1lbGluZS90aW1lbGluZS1lbnRyeS1jb250ZW50L3RpbWVsaW5lLWVudHJ5LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpILElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBa0IzQyxZQUFvQixVQUFzQixFQUFVLGdCQUFrQyxFQUFVLFFBQW1CO1FBQS9GLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWZuSCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQWFvRixDQUFDO0lBWHhILElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFBO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSTtTQUNsQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtpQkFDcEMsS0FBSyxDQUFDO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQzthQUN0RCxDQUFDO2lCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUVsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFBO1lBQ3JCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7aUJBQ3BDLEtBQUssQ0FBQztnQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7YUFDdkQsQ0FBQztpQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDdEYsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQTs7WUFsRGlDLFVBQVU7WUFBNEIsZ0JBQWdCO1lBQW9CLFNBQVM7O0FBbEJ4RyxnQ0FBZ0M7SUFONUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxnREFBc0Q7UUFFdEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyxnQ0FBZ0MsQ0FvRTVDO1NBcEVZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21nbC10aW1lbGluZS1lbnRyeS1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUtZW50cnktY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUtZW50cnktY29udGVudC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1nbFRpbWVsaW5lRW50cnlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgY29udGVudEhlaWdodDtcclxuICBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNldCBleHBhbmRlZChleHBhbmRlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgY29uc3QgYW5pbWF0ZSA9IHRoaXMuX2V4cGFuZGVkICE9PSBleHBhbmRlZDtcclxuICAgIHRoaXMuX2V4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICBhbmltYXRlID8gdGhpcy5hbmltYXRlKCkgOiB0aGlzLnNldFN0eWxlXHJcbiAgfVxyXG5cclxuICBnZXQgZXhwYW5kZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlciwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xsYXBzZWRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlaWdodDogJzBweCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXhwYW5kZWRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlaWdodDogdGhpcy5jb250ZW50SGVpZ2h0ICsgJ3B4J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICAgIC5idWlsZChbXHJcbiAgICAgICAgICBzdHlsZSh0aGlzLmdldENvbGxhcHNlZFN0eWxlKCkpLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMTAwbXMgZWFzZScsIHN0eWxlKHRoaXMuZ2V0RXhwYW5kZWRTdHlsZSgpKSksXHJcbiAgICAgICAgXSlcclxuICAgICAgICAuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KHsgdG9TdGF0ZTogJ2V4cGFuZGVkJyB9KSk7XHJcbiAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25CdWlsZGVyXHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICAgIC5idWlsZChbXHJcbiAgICAgICAgICBzdHlsZSh0aGlzLmdldEV4cGFuZGVkU3R5bGUoKSksXHJcbiAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJywgc3R5bGUodGhpcy5nZXRDb2xsYXBzZWRTdHlsZSgpKSksXHJcbiAgICAgICAgXSlcclxuICAgICAgICAuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KHsgdG9TdGF0ZTogJ2NvbGxhcHNlZCcgfSkpO1xyXG4gICAgICBhbmltYXRpb24ucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBiYXNlU3R5bGUgPSB0aGlzLmV4cGFuZGVkID8gdGhpcy5nZXRFeHBhbmRlZFN0eWxlKCkgOiB0aGlzLmdldENvbGxhcHNlZFN0eWxlKCk7XHJcbiAgICBPYmplY3Qua2V5cyhiYXNlU3R5bGUpLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcm9wZXJ0eSwgYmFzZVN0eWxlW3Byb3BlcnR5XSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
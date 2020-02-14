import { __decorate } from "tslib";
import { HostBinding, ViewEncapsulation } from '@angular/core';
import { MglTimelineEntrySideComponent } from './../timeline-entry-side/timeline-entry-side.component';
import { MglTimelineEntryDotComponent } from './../timeline-entry-dot/timeline-entry-dot.component';
import { Component, AfterViewInit, Output, EventEmitter, ContentChild, OnDestroy, ElementRef } from '@angular/core';
import { MglTimelineEntryContentComponent } from '../timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntryHeaderComponent } from '../timeline-entry-header/timeline-entry-header.component';
let MglTimelineEntryComponent = class MglTimelineEntryComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.subscriptions = [];
        this.focusOnOpen = false;
        this._mobile = false;
        this.changed = new EventEmitter();
        this.animationDone = new EventEmitter();
    }
    set expanded(expanded) {
        if (this.dot && expanded) {
            this.dot.expanded = expanded;
        }
        else {
            this.content.expanded = expanded;
        }
        this.changed.emit(expanded);
    }
    get expanded() {
        return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
    }
    set mobile(value) {
        this.elementRef.nativeElement.classList.toggle('mobile', value);
        if (this.dot) {
            this.dot.mobile = value;
        }
        if (this.side) {
            this.side.mobile = value;
        }
    }
    ngAfterViewInit() {
        if (this.dot) {
            this.subscriptions.push(this.dot.animationDone.subscribe(event => {
                if (event.toState === 'expanded') {
                    this.content.expanded = true;
                }
                else {
                    this.animationDone.emit(event);
                }
            }));
        }
        if (this.content) {
            this.subscriptions.push(this.content.animationDone.subscribe(event => {
                if (this.dot && event.toState === 'collapsed') {
                    this.dot.expanded = false;
                }
                else {
                    if (this.focusOnOpen) {
                        this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    this.animationDone.emit(event);
                }
            }));
        }
    }
    set alternate(value) {
        this.elementRef.nativeElement.classList.toggle('alternate', value);
        if (this.dot) {
            this.dot.alternate = value;
        }
        if (this.side) {
            this.side.alternate = value;
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    collapse() {
        this.expanded = false;
    }
    expand() {
        this.expanded = true;
    }
    toggle(event) {
        const headerFound = this.containsInPath(event, 'mgl-timeline-entry-header');
        const dotFound = this.containsInPath(event, 'mgl-timeline-entry-dot');
        if (headerFound || dotFound) {
            this.expanded = !this.expanded;
        }
    }
    containsInPath(mouseEvent, name) {
        let currentElem = mouseEvent.target;
        while (currentElem) {
            if (currentElem.localName === name) {
                return true;
            }
            currentElem = currentElem.parentElement;
        }
        return false;
    }
};
MglTimelineEntryComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export { MglTimelineEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tZ2wtdGltZWxpbmUvIiwic291cmNlcyI6WyJzcmMvdGltZWxpbmUvdGltZWxpbmUtZW50cnkvdGltZWxpbmUtZW50cnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFDTCxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3BGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzlHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBUzNHLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBMkNwQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekNsQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFM0MsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFnQnJCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFhakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT0csQ0FBQztJQXJDL0MsSUFBSSxRQUFRLENBQUMsUUFBUTtRQUNuQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFB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QUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyx5QkFBeUIsQ0E4R3JDO1NBOUdZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeVNpZGVDb21wb25lbnQgfSBmcm9tICcuLy4uL3RpbWVsaW5lLWVudHJ5LXNpZGUvdGltZWxpbmUtZW50cnktc2lkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50IH0gZnJvbSAnLi8uLi90aW1lbGluZS1lbnRyeS1kb3QvdGltZWxpbmUtZW50cnktZG90LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi90aW1lbGluZS1lbnRyeS1jb250ZW50L3RpbWVsaW5lLWVudHJ5LWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL3RpbWVsaW5lLWVudHJ5LWhlYWRlci90aW1lbGluZS1lbnRyeS1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUtZW50cnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1lbnRyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUtZW50cnkuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBmb2N1c09uT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQpIHtcclxuICAgIGlmICh0aGlzLmRvdCAmJiBleHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmRvdC5leHBhbmRlZCA9IGV4cGFuZGVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250ZW50LmV4cGFuZGVkID0gZXhwYW5kZWRcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KGV4cGFuZGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXhwYW5kZWQnKVxyXG4gIGdldCBleHBhbmRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRvdCA/ICh0aGlzLmRvdC5leHBhbmRlZCAmJiB0aGlzLmNvbnRlbnQuZXhwYW5kZWQpIDogdGhpcy5jb250ZW50LmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZScsIHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmRvdCkge1xyXG4gICAgICB0aGlzLmRvdC5tb2JpbGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZGUpIHtcclxuICAgICAgdGhpcy5zaWRlLm1vYmlsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgnZXhwYW5kJylcclxuICBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQpIGNvbnRlbnQ6IE1nbFRpbWVsaW5lRW50cnlDb250ZW50Q29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeUhlYWRlckNvbXBvbmVudCkgaGVhZGVyOiBNZ2xUaW1lbGluZUVudHJ5SGVhZGVyQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeURvdENvbXBvbmVudCkgZG90OiBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeVNpZGVDb21wb25lbnQpIHNpZGU6IE1nbFRpbWVsaW5lRW50cnlTaWRlQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kb3QpIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kb3QuYW5pbWF0aW9uRG9uZS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhwYW5kZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnQuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuY29udGVudC5hbmltYXRpb25Eb25lLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG90ICYmIGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLmRvdC5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5mb2N1c09uT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBhbHRlcm5hdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FsdGVybmF0ZScsIHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmRvdCkge1xyXG4gICAgICB0aGlzLmRvdC5hbHRlcm5hdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZGUpIHtcclxuICAgICAgdGhpcy5zaWRlLmFsdGVybmF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2UoKSB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBleHBhbmQoKSB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICB0b2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IGhlYWRlckZvdW5kID0gdGhpcy5jb250YWluc0luUGF0aChldmVudCwgJ21nbC10aW1lbGluZS1lbnRyeS1oZWFkZXInKTtcclxuICAgIGNvbnN0IGRvdEZvdW5kID0gdGhpcy5jb250YWluc0luUGF0aChldmVudCwgJ21nbC10aW1lbGluZS1lbnRyeS1kb3QnKTtcclxuICAgIGlmIChoZWFkZXJGb3VuZCB8fCBkb3RGb3VuZCkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnRhaW5zSW5QYXRoKG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGN1cnJlbnRFbGVtOiBFbGVtZW50ID0gbW91c2VFdmVudC50YXJnZXQgYXMgRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZW50RWxlbSkge1xyXG4gICAgICBpZiAoY3VycmVudEVsZW0ubG9jYWxOYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudEVsZW0gPSBjdXJyZW50RWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
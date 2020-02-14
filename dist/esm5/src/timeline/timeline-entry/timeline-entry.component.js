import { __decorate } from "tslib";
import { HostBinding, ViewEncapsulation } from '@angular/core';
import { MglTimelineEntrySideComponent } from './../timeline-entry-side/timeline-entry-side.component';
import { MglTimelineEntryDotComponent } from './../timeline-entry-dot/timeline-entry-dot.component';
import { Component, AfterViewInit, Output, EventEmitter, ContentChild, OnDestroy, ElementRef } from '@angular/core';
import { MglTimelineEntryContentComponent } from '../timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntryHeaderComponent } from '../timeline-entry-header/timeline-entry-header.component';
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
export { MglTimelineEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tZ2wtdGltZWxpbmUvIiwic291cmNlcyI6WyJzcmMvdGltZWxpbmUvdGltZWxpbmUtZW50cnkvdGltZWxpbmUtZW50cnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFDTCxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3BGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzlHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBUzNHO0lBMkNFLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekNsQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFM0MsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFnQnJCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFhakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT0csQ0FBQztJQXJDL0Msc0JBQUksK0NBQVE7YUFVWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFD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WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHNhQUE4QztZQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQztPQUNXLHlCQUF5QixDQThHckM7SUFBRCxnQ0FBQztDQUFBLEFBOUdELElBOEdDO1NBOUdZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeVNpZGVDb21wb25lbnQgfSBmcm9tICcuLy4uL3RpbWVsaW5lLWVudHJ5LXNpZGUvdGltZWxpbmUtZW50cnktc2lkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50IH0gZnJvbSAnLi8uLi90aW1lbGluZS1lbnRyeS1kb3QvdGltZWxpbmUtZW50cnktZG90LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi90aW1lbGluZS1lbnRyeS1jb250ZW50L3RpbWVsaW5lLWVudHJ5LWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL3RpbWVsaW5lLWVudHJ5LWhlYWRlci90aW1lbGluZS1lbnRyeS1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUtZW50cnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1lbnRyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUtZW50cnkuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBmb2N1c09uT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQpIHtcclxuICAgIGlmICh0aGlzLmRvdCAmJiBleHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmRvdC5leHBhbmRlZCA9IGV4cGFuZGVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250ZW50LmV4cGFuZGVkID0gZXhwYW5kZWRcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KGV4cGFuZGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXhwYW5kZWQnKVxyXG4gIGdldCBleHBhbmRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRvdCA/ICh0aGlzLmRvdC5leHBhbmRlZCAmJiB0aGlzLmNvbnRlbnQuZXhwYW5kZWQpIDogdGhpcy5jb250ZW50LmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZScsIHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmRvdCkge1xyXG4gICAgICB0aGlzLmRvdC5tb2JpbGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZGUpIHtcclxuICAgICAgdGhpcy5zaWRlLm1vYmlsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgnZXhwYW5kJylcclxuICBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQpIGNvbnRlbnQ6IE1nbFRpbWVsaW5lRW50cnlDb250ZW50Q29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeUhlYWRlckNvbXBvbmVudCkgaGVhZGVyOiBNZ2xUaW1lbGluZUVudHJ5SGVhZGVyQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeURvdENvbXBvbmVudCkgZG90OiBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTWdsVGltZWxpbmVFbnRyeVNpZGVDb21wb25lbnQpIHNpZGU6IE1nbFRpbWVsaW5lRW50cnlTaWRlQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kb3QpIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kb3QuYW5pbWF0aW9uRG9uZS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhwYW5kZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnQuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuY29udGVudC5hbmltYXRpb25Eb25lLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG90ICYmIGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLmRvdC5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5mb2N1c09uT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBhbHRlcm5hdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FsdGVybmF0ZScsIHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmRvdCkge1xyXG4gICAgICB0aGlzLmRvdC5hbHRlcm5hdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpZGUpIHtcclxuICAgICAgdGhpcy5zaWRlLmFsdGVybmF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2UoKSB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBleHBhbmQoKSB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICB0b2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IGhlYWRlckZvdW5kID0gdGhpcy5jb250YWluc0luUGF0aChldmVudCwgJ21nbC10aW1lbGluZS1lbnRyeS1oZWFkZXInKTtcclxuICAgIGNvbnN0IGRvdEZvdW5kID0gdGhpcy5jb250YWluc0luUGF0aChldmVudCwgJ21nbC10aW1lbGluZS1lbnRyeS1kb3QnKTtcclxuICAgIGlmIChoZWFkZXJGb3VuZCB8fCBkb3RGb3VuZCkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnRhaW5zSW5QYXRoKG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGN1cnJlbnRFbGVtOiBFbGVtZW50ID0gbW91c2VFdmVudC50YXJnZXQgYXMgRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZW50RWxlbSkge1xyXG4gICAgICBpZiAoY3VycmVudEVsZW0ubG9jYWxOYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudEVsZW0gPSBjdXJyZW50RWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
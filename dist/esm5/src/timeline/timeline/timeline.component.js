import { __decorate } from "tslib";
import { QueryList, ElementRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MglTimelineEntryComponent } from './../timeline-entry/timeline-entry.component';
import { Component, Input, ContentChildren, HostListener } from '@angular/core';
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
export { MglTimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tZ2wtdGltZWxpbmUvIiwic291cmNlcyI6WyJzcmMvdGltZWxpbmUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQXVDLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFRM0k7SUF3Q0UsOEJBQW9CLFVBQXNCLEVBQVUsaUJBQW9DO1FBQXBFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBckN4RixXQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLHlCQUFvQixHQUFXLEdBQUcsQ0FBQztRQUduQyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFXZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVlyQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFLaUQsQ0FBQztJQTFCN0Ysc0JBQUksd0NBQU07YUFLVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDO2FBUEQsVUFBVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMs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O1FBREMsS0FBSyxFQUFFO3dEQUNlO0lBR3ZCO1FBREMsS0FBSyxFQUFFO3NFQUMyQjtJQUduQztRQURDLEtBQUssRUFBRTsyREFDa0I7SUFHMUI7UUFEQyxLQUFLLEVBQUU7c0RBQ2M7SUFjdEI7UUFEQyxLQUFLLEVBQUU7MkRBSVA7SUFTRDtRQURDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQzt5REFDVztJQXdDdEQ7UUFEQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBSXpDO0lBakZVLG9CQUFvQjtRQU5oQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixnRkFBd0M7WUFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxvQkFBb0IsQ0FrRmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWxGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi8uLi90aW1lbGluZS1lbnRyeS90aW1lbGluZS1lbnRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KClcclxuICB0b2dnbGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1vYmlsZVdpZHRoVGhyZXNob2xkOiBudW1iZXIgPSA2NDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWx0ZXJuYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzaWRlOiBzdHJpbmcgPSAnbGVmdCc7XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY29udGVudCAmJiB0aGlzLmNvbnRlbnQuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5tb2JpbGUgPSB2YWx1ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbGUnLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIGdldCBtb2JpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZvY3VzT25PcGVuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZvY3VzT25PcGVuKGZvY3VzT25PcGVuKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgJiYgdGhpcy5jb250ZW50LmZvckVhY2goZW50cnkgPT4gZW50cnkuZm9jdXNPbk9wZW4gPSBmb2N1c09uT3Blbik7XHJcbiAgICB0aGlzLl9mb2N1c09uT3BlbiA9IGZvY3VzT25PcGVuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvY3VzT25PcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzT25PcGVuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1nbFRpbWVsaW5lRW50cnlDb21wb25lbnQpXHJcbiAgcHJpdmF0ZSBjb250ZW50OiBRdWVyeUxpc3Q8TWdsVGltZWxpbmVFbnRyeUNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubW9iaWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPCB0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUNvbnRlbnQoKSk7XHJcbiAgICB0aGlzLmNvbnRlbnQuY2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlcyA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoKSB7XHJcbiAgICB0aGlzLm5nT25EZXN0cm95KCk7XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50b2dnbGUpIHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBlbnRyeS5jaGFuZ2VkLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuZmlsdGVyKGUgPT4gZSAhPT0gZW50cnkpLmZvckVhY2goZSA9PiBlLmNvbGxhcHNlKCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbnRyeS5hbHRlcm5hdGUgPSB0aGlzLmFsdGVybmF0ZSA/IChpbmRleCAlIDIgIT09IDApIDogKHRoaXMuc2lkZSA9PT0gJ3JpZ2h0Jyk7XHJcbiAgICAgICAgZW50cnkubW9iaWxlID0gdGhpcy5tb2JpbGU7XHJcbiAgICAgICAgZW50cnkuZm9jdXNPbk9wZW4gPSB0aGlzLmZvY3VzT25PcGVuO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkKTtcclxuICAgIHRoaXMubW9iaWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPCB0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkO1xyXG4gIH1cclxufVxyXG4iXX0=
import { __decorate } from "tslib";
import { QueryList, ElementRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MglTimelineEntryComponent } from './../timeline-entry/timeline-entry.component';
import { Component, Input, ContentChildren, HostListener } from '@angular/core';
let MglTimelineComponent = class MglTimelineComponent {
    constructor(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.toggle = true;
        this.mobileWidthThreshold = 640;
        this.alternate = true;
        this.side = 'left';
        this._focusOnOpen = false;
        this.subscriptions = [];
    }
    set mobile(value) {
        this.content && this.content.forEach(entry => entry.mobile = value);
        this.elementRef.nativeElement.classList.toggle('mobile', value);
    }
    get mobile() {
        return this.elementRef.nativeElement.classList.contains('mobile');
    }
    set focusOnOpen(focusOnOpen) {
        this.content && this.content.forEach(entry => entry.focusOnOpen = focusOnOpen);
        this._focusOnOpen = focusOnOpen;
    }
    get focusOnOpen() {
        return this._focusOnOpen;
    }
    ngOnChanges(simpleChanges) {
        this.updateContent();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    ngAfterViewInit() {
        this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
        setTimeout(() => this.updateContent());
        this.content.changes.subscribe(changes => {
            this.updateContent();
        });
    }
    updateContent() {
        this.ngOnDestroy();
        if (this.content) {
            this.content.forEach((entry, index) => {
                if (this.toggle) {
                    this.subscriptions.push(entry.changed.subscribe(state => {
                        if (state === true) {
                            this.content.filter(e => e !== entry).forEach(e => e.collapse());
                        }
                    }));
                }
                entry.alternate = this.alternate ? (index % 2 !== 0) : (this.side === 'right');
                entry.mobile = this.mobile;
                entry.focusOnOpen = this.focusOnOpen;
            });
        }
    }
    onResize(ev) {
        console.log(this.mobileWidthThreshold);
        this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
    }
};
MglTimelineComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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
export { MglTimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tZ2wtdGltZWxpbmUvIiwic291cmNlcyI6WyJzcmMvdGltZWxpbmUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQXVDLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFRM0ksSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUF3Qy9CLFlBQW9CLFVBQXNCLEVBQVUsaUJBQW9DO1FBQXBFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBckN4RixXQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLHlCQUFvQixHQUFXLEdBQUcsQ0FBQztRQUduQyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFXZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVlyQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFLaUQsQ0FBQztJQTFCN0YsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRUQsSUFBSSxNQUFN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QUU7dURBQ2tCO0FBRzFCO0lBREMsS0FBSyxFQUFFO2tEQUNjO0FBY3RCO0lBREMsS0FBSyxFQUFFO3VEQUlQO0FBU0Q7SUFEQyxlQUFlLENBQUMseUJBQXlCLENBQUM7cURBQ1c7QUF3Q3REO0lBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29EQUl6QztBQWpGVSxvQkFBb0I7SUFOaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsZ0ZBQXdDO1FBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO0dBQ1csb0JBQW9CLENBa0ZoQztTQWxGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi8uLi90aW1lbGluZS1lbnRyeS90aW1lbGluZS1lbnRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KClcclxuICB0b2dnbGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1vYmlsZVdpZHRoVGhyZXNob2xkOiBudW1iZXIgPSA2NDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWx0ZXJuYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzaWRlOiBzdHJpbmcgPSAnbGVmdCc7XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY29udGVudCAmJiB0aGlzLmNvbnRlbnQuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5tb2JpbGUgPSB2YWx1ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbGUnLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIGdldCBtb2JpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZvY3VzT25PcGVuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZvY3VzT25PcGVuKGZvY3VzT25PcGVuKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgJiYgdGhpcy5jb250ZW50LmZvckVhY2goZW50cnkgPT4gZW50cnkuZm9jdXNPbk9wZW4gPSBmb2N1c09uT3Blbik7XHJcbiAgICB0aGlzLl9mb2N1c09uT3BlbiA9IGZvY3VzT25PcGVuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvY3VzT25PcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzT25PcGVuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1nbFRpbWVsaW5lRW50cnlDb21wb25lbnQpXHJcbiAgcHJpdmF0ZSBjb250ZW50OiBRdWVyeUxpc3Q8TWdsVGltZWxpbmVFbnRyeUNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubW9iaWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPCB0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUNvbnRlbnQoKSk7XHJcbiAgICB0aGlzLmNvbnRlbnQuY2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlcyA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoKSB7XHJcbiAgICB0aGlzLm5nT25EZXN0cm95KCk7XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50b2dnbGUpIHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBlbnRyeS5jaGFuZ2VkLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuZmlsdGVyKGUgPT4gZSAhPT0gZW50cnkpLmZvckVhY2goZSA9PiBlLmNvbGxhcHNlKCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbnRyeS5hbHRlcm5hdGUgPSB0aGlzLmFsdGVybmF0ZSA/IChpbmRleCAlIDIgIT09IDApIDogKHRoaXMuc2lkZSA9PT0gJ3JpZ2h0Jyk7XHJcbiAgICAgICAgZW50cnkubW9iaWxlID0gdGhpcy5tb2JpbGU7XHJcbiAgICAgICAgZW50cnkuZm9jdXNPbk9wZW4gPSB0aGlzLmZvY3VzT25PcGVuO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkKTtcclxuICAgIHRoaXMubW9iaWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPCB0aGlzLm1vYmlsZVdpZHRoVGhyZXNob2xkO1xyXG4gIH1cclxufVxyXG4iXX0=
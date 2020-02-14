import { __decorate } from "tslib";
import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, EventEmitter, ElementRef, AfterViewInit, Renderer2, ViewEncapsulation } from '@angular/core';
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
export { MglTimelineEntryContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1nbC10aW1lbGluZS8iLCJzb3VyY2VzIjpbInNyYy90aW1lbGluZS90aW1lbGluZS1lbnRyeS1jb250ZW50L3RpbWVsaW5lLWVudHJ5LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpIO0lBa0JFLDBDQUFvQixVQUFzQixFQUFVLGdCQUFrQyxFQUFVLFFBQW1CO1FBQS9GLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWZuSCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQWFvRixDQUFDO0lBWHhILHNCQUFJLHNEQUFRO2FBT1o7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQVRELFVBQWEsUUFBaUI7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDaEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDMUMsQ0FBQzs7O09BQUE7SUFRRCwwREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyw0REFBaUIsR0FBekI7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFBO0lBQ0gsQ0FBQztJQUVPLDJEQUFnQixHQUF4QjtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJO1NBQ2xDLENBQUE7SUFDSCxDQUFDO0lBRUQsa0RBQU8sR0FBUDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtpQkFDcEMsS0FBSyxDQUFDO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQzthQUN0RCxDQUFDO2lCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztZQUN6RSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FFbEI7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtZQUNyQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2lCQUNwQyxLQUFLLENBQUM7Z0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM5QixPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZELENBQUM7aUJBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDeEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDO1lBQzFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxtREFBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN0RixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQWhEK0IsVUFBVTtnQkFBNEIsZ0JBQWdCO2dCQUFvQixTQUFTOztJQWxCeEcsZ0NBQWdDO1FBTjVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsZ0RBQXNEO1lBRXRELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csZ0NBQWdDLENBb0U1QztJQUFELHVDQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWdsLXRpbWVsaW5lLWVudHJ5LWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1lbnRyeS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lbGluZS1lbnRyeS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50SGVpZ2h0O1xyXG4gIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc2V0IGV4cGFuZGVkKGV4cGFuZGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBhbmltYXRlID0gdGhpcy5fZXhwYW5kZWQgIT09IGV4cGFuZGVkO1xyXG4gICAgdGhpcy5fZXhwYW5kZWQgPSBleHBhbmRlZDtcclxuICAgIGFuaW1hdGUgPyB0aGlzLmFuaW1hdGUoKSA6IHRoaXMuc2V0U3R5bGVcclxuICB9XHJcblxyXG4gIGdldCBleHBhbmRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbGxhcHNlZFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFeHBhbmRlZFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRlbnRIZWlnaHQgKyAncHgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyXHJcbiAgICAgICAgLmJ1aWxkKFtcclxuICAgICAgICAgIHN0eWxlKHRoaXMuZ2V0Q29sbGFwc2VkU3R5bGUoKSksXHJcbiAgICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlJywgc3R5bGUodGhpcy5nZXRFeHBhbmRlZFN0eWxlKCkpKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4gdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoeyB0b1N0YXRlOiAnZXhwYW5kZWQnIH0pKTtcclxuICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkJ1aWxkZXJcclxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25CdWlsZGVyXHJcbiAgICAgICAgLmJ1aWxkKFtcclxuICAgICAgICAgIHN0eWxlKHRoaXMuZ2V0RXhwYW5kZWRTdHlsZSgpKSxcclxuICAgICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh0aGlzLmdldENvbGxhcHNlZFN0eWxlKCkpKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIC5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4gdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoeyB0b1N0YXRlOiAnY29sbGFwc2VkJyB9KSk7XHJcbiAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZSgpIHtcclxuICAgIGNvbnN0IGJhc2VTdHlsZSA9IHRoaXMuZXhwYW5kZWQgPyB0aGlzLmdldEV4cGFuZGVkU3R5bGUoKSA6IHRoaXMuZ2V0Q29sbGFwc2VkU3R5bGUoKTtcclxuICAgIE9iamVjdC5rZXlzKGJhc2VTdHlsZSkuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByb3BlcnR5LCBiYXNlU3R5bGVbcHJvcGVydHldKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
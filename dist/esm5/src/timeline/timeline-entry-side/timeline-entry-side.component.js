import { __decorate } from "tslib";
import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
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
export { MglTimelineEntrySideComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktc2lkZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1nbC10aW1lbGluZS8iLCJzb3VyY2VzIjpbInNyYy90aW1lbGluZS90aW1lbGluZS1lbnRyeS1zaWRlL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEY7SUFVRSx1Q0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFSL0Msc0JBQUksb0RBQVM7YUFBYixVQUFjLEtBQUs7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBTTthQUFWLFVBQVcsS0FBSztZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBOztnQkFFK0IsVUFBVTs7SUFWL0IsNkJBQTZCO1FBTnpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMscUNBQW1EO1lBRW5ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csNkJBQTZCLENBWXpDO0lBQUQsb0NBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUtZW50cnktc2lkZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUVudHJ5U2lkZUNvbXBvbmVudCB7XHJcblxyXG4gIHNldCBhbHRlcm5hdGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FsdGVybmF0ZScsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZScsIHZhbHVlKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbn1cclxuIl19
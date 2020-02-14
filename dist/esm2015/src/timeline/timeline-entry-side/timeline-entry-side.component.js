import { __decorate } from "tslib";
import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
let MglTimelineEntrySideComponent = class MglTimelineEntrySideComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    set alternate(value) {
        this.elementRef.nativeElement.classList.toggle('alternate', value);
    }
    set mobile(value) {
        this.elementRef.nativeElement.classList.toggle('mobile', value);
    }
};
MglTimelineEntrySideComponent.ctorParameters = () => [
    { type: ElementRef }
];
MglTimelineEntrySideComponent = __decorate([
    Component({
        selector: 'mgl-timeline-entry-side',
        template: "<ng-content></ng-content>",
        encapsulation: ViewEncapsulation.None,
        styles: ["mgl-timeline-entry-side{position:absolute;top:0;left:100%;width:100%;text-align:center}mgl-timeline-entry-side.alternate{left:-100%}mgl-timeline-entry-side.mobile{display:none}"]
    })
], MglTimelineEntrySideComponent);
export { MglTimelineEntrySideComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZW50cnktc2lkZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1nbC10aW1lbGluZS8iLCJzb3VyY2VzIjpbInNyYy90aW1lbGluZS90aW1lbGluZS1lbnRyeS1zaWRlL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEYsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFVeEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFSL0MsSUFBSSxTQUFTLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FJRixDQUFBOztZQUZpQyxVQUFVOztBQVYvQiw2QkFBNkI7SUFOekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxxQ0FBbUQ7UUFFbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyw2QkFBNkIsQ0FZekM7U0FaWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZ2wtdGltZWxpbmUtZW50cnktc2lkZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLWVudHJ5LXNpZGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZUVudHJ5U2lkZUNvbXBvbmVudCB7XHJcblxyXG4gIHNldCBhbHRlcm5hdGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FsdGVybmF0ZScsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBtb2JpbGUodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZScsIHZhbHVlKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbn1cclxuIl19
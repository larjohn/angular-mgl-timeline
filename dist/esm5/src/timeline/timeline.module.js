import { __decorate } from "tslib";
import { MglTimelineEntryHeaderComponent } from './timeline-entry-header/timeline-entry-header.component';
import { MglTimelineEntryDotComponent } from './timeline-entry-dot/timeline-entry-dot.component';
import { MglTimelineEntryContentComponent } from './timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntrySideComponent } from './timeline-entry-side/timeline-entry-side.component';
import { MglTimelineEntryComponent } from './timeline-entry/timeline-entry.component';
import { MglTimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
var MglTimelineModule = /** @class */ (function () {
    function MglTimelineModule() {
    }
    MglTimelineModule = __decorate([
        NgModule({
            declarations: [
                MglTimelineComponent,
                MglTimelineEntryComponent,
                MglTimelineEntryHeaderComponent,
                MglTimelineEntrySideComponent,
                MglTimelineEntryContentComponent,
                MglTimelineEntryDotComponent
            ],
            exports: [
                MglTimelineComponent,
                MglTimelineEntryComponent,
                MglTimelineEntryHeaderComponent,
                MglTimelineEntrySideComponent,
                MglTimelineEntryContentComponent,
                MglTimelineEntryDotComponent
            ]
        })
    ], MglTimelineModule);
    return MglTimelineModule;
}());
export { MglTimelineModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tZ2wtdGltZWxpbmUvIiwic291cmNlcyI6WyJzcmMvdGltZWxpbmUvdGltZWxpbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJ6QztJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBbEI3QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2dCQUNwQix5QkFBeUI7Z0JBQ3pCLCtCQUErQjtnQkFDL0IsNkJBQTZCO2dCQUM3QixnQ0FBZ0M7Z0JBQ2hDLDRCQUE0QjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxvQkFBb0I7Z0JBQ3BCLHlCQUF5QjtnQkFDekIsK0JBQStCO2dCQUMvQiw2QkFBNkI7Z0JBQzdCLGdDQUFnQztnQkFDaEMsNEJBQTRCO2FBQzdCO1NBQ0YsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1lbnRyeS1oZWFkZXIvdGltZWxpbmUtZW50cnktaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1nbFRpbWVsaW5lRW50cnlEb3RDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLWVudHJ5LWRvdC90aW1lbGluZS1lbnRyeS1kb3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLWVudHJ5LWNvbnRlbnQvdGltZWxpbmUtZW50cnktY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZ2xUaW1lbGluZUVudHJ5U2lkZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtZW50cnktc2lkZS90aW1lbGluZS1lbnRyeS1zaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1nbFRpbWVsaW5lRW50cnlDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLWVudHJ5L3RpbWVsaW5lLWVudHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1nbFRpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWdsVGltZWxpbmVDb21wb25lbnQsXHJcbiAgICBNZ2xUaW1lbGluZUVudHJ5Q29tcG9uZW50LFxyXG4gICAgTWdsVGltZWxpbmVFbnRyeUhlYWRlckNvbXBvbmVudCxcclxuICAgIE1nbFRpbWVsaW5lRW50cnlTaWRlQ29tcG9uZW50LFxyXG4gICAgTWdsVGltZWxpbmVFbnRyeUNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBNZ2xUaW1lbGluZUVudHJ5RG90Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNZ2xUaW1lbGluZUNvbXBvbmVudCxcclxuICAgIE1nbFRpbWVsaW5lRW50cnlDb21wb25lbnQsXHJcbiAgICBNZ2xUaW1lbGluZUVudHJ5SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTWdsVGltZWxpbmVFbnRyeVNpZGVDb21wb25lbnQsXHJcbiAgICBNZ2xUaW1lbGluZUVudHJ5Q29udGVudENvbXBvbmVudCxcclxuICAgIE1nbFRpbWVsaW5lRW50cnlEb3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZ2xUaW1lbGluZU1vZHVsZSB7IH1cclxuIl19
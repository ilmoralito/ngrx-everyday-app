import { Type } from "@angular/core";
import { BasicComponent } from "./basic/basic.component";
import { StaffDetailComponent } from "./staff-detail/staff-detail.component";

export const components: Type<any>[] = [BasicComponent, StaffDetailComponent];

export * from "./basic/basic.component";
export * from "./staff-detail/staff-detail.component"

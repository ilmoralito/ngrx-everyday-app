import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, SharedModule, LetDirective, ProjectsRoutingModule],
})
export class ProjectsModule {}

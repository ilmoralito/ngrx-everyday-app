import { Component, inject } from "@angular/core";
import { FilterType, ProjectsStore } from "./state/projects.store";
import { getRandomName } from "../utils/utils";
import { Project } from "./state/project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  providers: [ProjectsStore],
})
export class ProjectsComponent {
  private readonly store = inject(ProjectsStore);

  projects$ = this.store.projectsFiltered$;
  project$ = this.store.currentProject$;

  add() {
    const name = getRandomName();

    this.store.add({
      id: crypto.randomUUID(),
      name: name,
      github: `https://github.com/${name}`,
      completed: false,
    });
  }

  onFilter(value: FilterType) {
    this.store.filter(value);
  }

  set(id: string) {
    this.store.set(id);
  }

  clear() {
    this.store.clear();
  }

  update(project: Project) {
    const name = getRandomName();

    this.store.update({
      ...project,
      name,
      github: `https://github.com/${name}`,
    });
  }

  toggle(id: string) {
    this.store.toggle(id);
  }

  delete(id: string) {
    this.store.delete(id);
  }
}

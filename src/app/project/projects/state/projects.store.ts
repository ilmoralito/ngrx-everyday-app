import { Injectable } from "@angular/core";
import { Project } from "./project.model";
import { ComponentStore } from "@ngrx/component-store";

export type FilterType = "all" | "completed" | "pending";

export interface ProjectsState {
	projects: Project[];
	currentProjectId: string | null;
	filter: FilterType;
}

export const initialState: ProjectsState = {
	projects: [],
	currentProjectId: null,
	filter: "all",
};

@Injectable()
export class ProjectsStore extends ComponentStore<ProjectsState> {
	projects$ = this.select((state) => state.projects);
	currentProjectId$ = this.select((state) => state.currentProjectId);
	filter$ = this.select((state) => state.filter);
	currentProject$ = this.select(
		this.projects$,
		this.currentProjectId$,
		(projects, id) => projects.find((project) => project.id === id),
	);
	projectsFiltered$ = this.select(
		this.projects$,
		this.filter$,
		(projects, filter) => {
			if (filter === "all") {
				return projects;
			}

			if (filter === "completed") {
				return projects.filter((project) => project.completed);
			}

			return projects.filter((project) => !project.completed);
		},
	);

	constructor() {
		super(initialState);
	}

	add(project: Project) {
		this.setState((state) => ({
			...state,
			projects: [...state.projects, project],
		}));
	}

	set(id: string) {
		this.patchState({ currentProjectId: id });
	}

	clear() {
		this.patchState({ currentProjectId: null });
	}

	filter(value: FilterType) {
		this.patchState({ filter: value });
	}

	readonly update = this.updater((state, project: Project) => ({
		...state,
		projects: state.projects.map((p) =>
			p.id === project.id ? { ...project } : { ...p },
		),
	}));

	readonly toggle = this.updater((state, id: string) => ({
		...state,
		projects: state.projects.map((project) =>
			project.id === id
				? { ...project, completed: !project.completed }
				: { ...project },
		),
	}));

	readonly delete = this.updater((state, id: string) => ({
		...state,
		projects: state.projects.filter((project) => project.id !== id),
	}));
}

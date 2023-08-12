import { RepoModel } from "./repo.model";

export interface ReposState {
	collection: RepoModel[];
	selectedRepoId: string | null;
}

export const initialState: ReposState = {
	collection: [],
	selectedRepoId: null,
};

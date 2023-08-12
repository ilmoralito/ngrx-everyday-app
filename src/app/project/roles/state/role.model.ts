export interface RoleModel {
	id: string;
	name: string;
	description: string;
}

export type RolePreviewModel = Omit<RoleModel, "id">;

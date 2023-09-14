export interface Staff {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type StaffPreview = Omit<Staff, "id">;

export interface Todo {
	id: string;
	name: string;
	completed: boolean;
}

export interface Common {
	id: string;
}

export interface Sample1 extends Common {
	firstName: string;
}

export type Sample2 = Omit<Sample1, "id">;

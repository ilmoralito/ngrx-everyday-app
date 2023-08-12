export interface Artist {
	id: string;
	firstName: string;
	lastName: string;
	location: Location;
	type: Type;
}

export interface Location {
	address: string;
	city: string;
}

export interface Type {
	id: string;
	name: string;
	displayName: string;
	links: string[];
}

export interface User {
	id: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
}

export interface Credentials {
	username: string;
	password: string;
}


export interface Location {
	id: string;
	name: string;
}

export interface TenantID {
	id: string;
}

export interface Tenant {
	name: string;
	nickname: Location,
	ids: TenantID[]
}

export interface TenantType {
	name: string;
	display: string;
}
export enum Option {
    Option1 = "option-1",
    Option2 = "option-2",
    Option3 = "option-3",
}

export interface Settings {
    option: Option;
}

export interface Owner {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    settings: Settings;
}

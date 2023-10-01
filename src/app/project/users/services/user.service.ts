import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Street {
  number: string;
  name: string;
}

export interface Coordinante {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  coordinates: Coordinante;
  timezone: Timezone;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface DOB {
  date: string;
  age: string;
}

export interface Registered {
  date: string;
  age: string;
}

export interface ID {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface User {
  name: Name;
  email: string;
  phone: string;
  cell: string;
  gender: string;
  nat: string;
  location: Location;
  login: Login;
  dob: DOB;
  registered: Registered;
  id: ID;
  picture: Picture;
}

export interface Result {
  results: User[];
  info: Info;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly BASE_URL = "https://randomuser.me";
  private readonly ENDPOINT = `${this.BASE_URL}/api`;

  constructor(private readonly httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<Result>(this.ENDPOINT, {
      params: new HttpParams().set("results", 10),
    });
  }
}

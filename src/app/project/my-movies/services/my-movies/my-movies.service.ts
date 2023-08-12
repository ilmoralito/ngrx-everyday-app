import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyMovie } from "../../state/my-movie.model";

@Injectable({
  providedIn: "root",
})
export class MyMoviesService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<MyMovie[]>("http://localhost:3000/my-movies");
  }

  getOne(id: string) {
    return this.httpClient.get<MyMovie>(
      `http://localhost:3000/my-movies/${id}`,
    );
  }
}

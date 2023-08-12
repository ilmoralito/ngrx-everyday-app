import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../../state/category.model";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  private readonly baseUrl = "http://localhost:3000/categories";

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.httpClient.get<Category>(`${this.baseUrl}/${id}`);
  }

  add(category: Category) {
    return this.httpClient.post<Category>(this.baseUrl, category);
  }

  delete(id: string) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

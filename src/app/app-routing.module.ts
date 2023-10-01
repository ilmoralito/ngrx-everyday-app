import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "todos",
    loadChildren: () =>
      import("./project/todo-app/todo-app.module").then((m) => m.TodoAppModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./project/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "movies",
    loadChildren: () =>
      import("./project/movies/movies.module").then((m) => m.MoviesModule),
  },
  {
    path: "counter",
    loadChildren: () =>
      import("./project/counter/counter.module").then((m) => m.CounterModule),
  },
  {
    path: "roles",
    loadChildren: () =>
      import("./project/roles/roles.module").then((m) => m.RolesModule),
  },
  {
    path: "product-list",
    loadChildren: () =>
      import("./project/product-list/product-list.module").then(
        (m) => m.ProductListModule,
      ),
  },
  {
    path: "products",
    loadChildren: () =>
      import("./project/products/products.module").then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./project/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "repos",
    loadChildren: () =>
      import("./project/repos/repos.module").then((m) => m.ReposModule),
  },
  {
    path: "countries",
    loadChildren: () =>
      import("./project/countries/countries.module").then(
        (m) => m.CountriesModule,
      ),
  },
  {
    path: "new-todos",
    loadChildren: () =>
      import("./project/new-todos/new-todos.module").then(
        (m) => m.NewTodosModule,
      ),
  },
  {
    path: "animes",
    loadChildren: () =>
      import("./project/animes/animes.module").then((m) => m.AnimesModule),
  },
  {
    path: "my-movies",
    loadChildren: () =>
      import("./project/my-movies/my-movies.module").then(
        (m) => m.MyMoviesModule,
      ),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./project/projects/projects.module").then(
        (m) => m.ProjectsModule,
      ),
  },
  {
    path: "categories",
    loadChildren: () =>
      import("./project/categories/categories.module").then(
        (m) => m.CategoriesModule,
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./project/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./project/books/books.module").then((m) => m.BooksModule),
  },
  {
    path: "members",
    loadChildren: () =>
      import("./project/members/members.module").then((m) => m.MembersModule),
  },
  {
    path: "people",
    loadChildren: () =>
      import("./project/people/people.module").then((m) => m.PeopleModule),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./project/staff/staff.module").then((m) => m.StaffModule),
  },
  {
    path: "owners",
    loadChildren: () =>
      import("./project/owner/owner.module").then((m) => m.OwnerModule),
  },
  {
    path: "types",
    loadChildren: () =>
      import("./project/type/type.module").then((m) => m.TypeModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./project/login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

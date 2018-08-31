import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component Routes Get Imported Here
import { HomeRoute } from "./home/home.route";
import { ResourcesRoute } from "./resources/resources.route";

const routes: Routes = [
  // Default route
  { path: "", pathMatch: "full", redirectTo: "home" },
  HomeRoute,
  ResourcesRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule {}

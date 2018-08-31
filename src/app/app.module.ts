import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ResourcesComponent } from "./resources/resources.component";
import { NavComponent } from "./nav/nav.component";

// Modules
import { AppRouteModule } from "./app-route.module";

// Services

@NgModule({
  declarations: [
    // Components Go Here
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    NavComponent
  ],
  imports: [
    // Modules Go Here
    BrowserModule,
    AppRouteModule
  ],
  providers: [
    // Services Go Here
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

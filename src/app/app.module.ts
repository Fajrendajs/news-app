import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./news-app/routing/app-routing.module";
import { MaterialModule } from "./news-app/material/material.module";
import { PostsComponent } from "./news-app/posts/posts.component";
import { NavbarComponent } from "./news-app/navbar/navbar.component";

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./components/shopping-list/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeItemComponent } from "./components/recipes/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule,
    MaterialModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

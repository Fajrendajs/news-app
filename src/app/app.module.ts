import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

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
    RecipeDetailComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "Test description",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-XK68rqkacOf3ukRfAC5fwWybacgykWEITTx0kMWX-28zwog"
    ),
    new Recipe(
      "A test recipe 2",
      "Test description 2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-XK68rqkacOf3ukRfAC5fwWybacgykWEITTx0kMWX-28zwog"
    )
  ];
}

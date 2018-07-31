import { Component } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent {
  serverElements = [{ name: "Unix" }];
  today: Date = new Date();

  onServerAdded(serverdata: { name }) {
    this.serverElements.push({ name: serverdata.name });
  }
}

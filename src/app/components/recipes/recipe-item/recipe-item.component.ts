import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent {
  @Output() serverCreated = new EventEmitter<{ name: string }>();
  serverName: string;

  onAddServer() {
    this.serverCreated.emit({ name: this.serverName });
    this.serverName = "";
  }
}

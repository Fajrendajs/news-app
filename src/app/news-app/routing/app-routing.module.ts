import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "../posts/posts.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent
  } /*,
  { path: "upload-csv", component: CovalentComponent },
  { path: "inline", component: InlineComponent }*/
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}

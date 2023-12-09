import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home",
    component: HomepageViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

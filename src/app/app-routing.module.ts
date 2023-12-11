import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { UserDataViewComponent } from './views/user-data-view/user-data-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home",
    component: HomepageViewComponent
  },
  {
    path: "user-data",
    component: UserDataViewComponent
  },
  {
    path: "login",
    component: LoginViewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

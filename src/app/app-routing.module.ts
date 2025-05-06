import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { UserDataViewComponent } from './views/user-data-view/user-data-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ViewDataComponent } from './home/user-data/view-data/view-data.component';
import { UpdateComponent } from './home/user-data/update/update.component';
import { UpdatePasswordComponent } from './home/user-data/update-password/update-password.component';
import { ForgetPasswordComponent } from './home/user-data/forget-password/forget-password.component';
import { ResetPasswordComponent } from './home/user-data/reset-password/reset-password.component';
import { KnowledgeTrailInfoViewComponent } from './views/knowledge-trail-info-view/knowledge-trail-info-view.component';
import { KnowledgeTrailCareerViewComponent } from './views/knowledge-trail-career-view/knowledge-trail-career-view.component';
import { KnowledgeTrailInfoResolver } from './home/knowledge-trail-info/knowledge-trail-info.resolve';
import { KnowledgeTrailCareerResolver } from './home/knowledge-trail-career/knowledge-trail-career.resolve';
import { ViewDataResolver } from './home/user-data/view-data/view-data.resolve';
import { MainMenuTrailTracksComponent } from './home/main-menu-trail-tracks/main-menu-trail-tracks.component';


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
    component: UserDataViewComponent,
    children: [
      { path: "view", component: ViewDataComponent,
        resolve: {
          register: ViewDataResolver
        }
      },
      { path: "update", component: UpdateComponent},
      { path: "update-password", component: UpdatePasswordComponent}
    ]
  },
  {
    path: "reset-password",
    component: UserDataViewComponent,
    children: [
      { path: "", component: UpdatePasswordComponent}
    ]
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: "validate-code",
    component: ResetPasswordComponent
  },
  {
    path: "login",
    component: LoginViewComponent 
  },
  {
    path: "knowledge-trail",
    component: KnowledgeTrailInfoViewComponent,
    resolve: {
      careers: KnowledgeTrailInfoResolver
    }
  },
  {
    path: "knowledge-trail/:career",
    component: KnowledgeTrailCareerViewComponent,
    resolve: {
      career: KnowledgeTrailCareerResolver
    }
  },
  {
    path: "main-menu-trail-tracks",
    component: MainMenuTrailTracksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

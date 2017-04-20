import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {ForgottenPasswordComponent} from "./forgotten-password/forgotten-password.component";

const appRoutes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entry/student'},
  {path: 'entry/:userType', component: LoginComponent},
  {path: 'forgottenpassword', component: ForgottenPasswordComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {path:  '', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'app', component: AppComponent },
  {path: 'students', component: UserComponent, children:
  [
    {path: 'details/:name', component: UserDetailsComponent}
  ]},
  {path: 'oldhome', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

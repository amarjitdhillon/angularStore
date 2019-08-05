import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {AppComponent} from "./app.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpCreateComponent} from './emp-create/emp-create.component';

const routes: Routes = [{path: '', component: EmpCreateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

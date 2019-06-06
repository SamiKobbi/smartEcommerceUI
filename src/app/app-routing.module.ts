import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category/category-list/category-list.component';
import { CallbackComponent } from './callback/callback.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  {
    path: 'admin',
    component: CategoryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

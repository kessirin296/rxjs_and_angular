import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule'
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

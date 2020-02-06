import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CardAchieveComponent } from './card-achieve/card-achieve.component';

const route: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [TodoComponent, CardComponent, CardAchieveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class TodoModule { }

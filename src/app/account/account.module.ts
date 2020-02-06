import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const route: Routes = [
  {
    path: '',
    component: AccountComponent
  }
];


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route),
  ]
})
export class AccountModule { }

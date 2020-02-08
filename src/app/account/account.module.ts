import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountResolve } from './account.resolve';

const route: Routes = [
  {
    path: '',
    component: AccountComponent,
    resolve: {
      data: AccountResolve
    }
  }
];


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ],
  providers: [AccountResolve]
})
export class AccountModule { }

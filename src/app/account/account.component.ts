import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountImp } from '../model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.firstName = this.accountService.account.firstName;
    this.lastName = this.accountService.account.lastName;
    this.email = this.accountService.account.email;
  }

  onChange(type: 'firstName' | 'lastName' | 'email', value: string) {
    switch (type) {
      case 'firstName':
        this.firstName = value;
        break;
      case 'lastName':
        this.lastName = value;
        break;
      case 'email':
        this.email = value;
        break;
    }
  }

  checkEmail(email: string) {
    if (!email) {
      return false;
    }
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !re.test(email);
  }

  onSubmit() {
    this.accountService.account = new AccountImp({ firstName: this.firstName, lastName: this.lastName, email: this.email });
  }

}

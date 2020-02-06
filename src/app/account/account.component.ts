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

  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.firstName = this.accountService.account.firstName;
    this.lastName = this.accountService.account.lastName;
  }

  onChange(type: 'firstName' | 'lastName', value: string) {
    switch (type) {
      case 'firstName':
        this.firstName = value;
        break;
      case 'lastName':
        this.lastName = value;
        break;
    }
  }

  onSubmit() {
    this.accountService.account = new AccountImp({ firstName: this.firstName, lastName: this.lastName });
  }

}

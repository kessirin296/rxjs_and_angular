import { Injectable } from '@angular/core';
import { AccountImp } from './model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private key = 'account';
  constructor() { }

  get account(): AccountImp {
    const value = JSON.parse(localStorage.getItem(this.key));
    return value || new AccountImp();
  }

  set account(account: AccountImp) {
    localStorage.setItem(this.key, JSON.stringify(account));
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountImp } from '../model/account';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, throttleTime, auditTime } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // public firstName: string;
  // public lastName: string;
  // public email: string;

  public form: FormGroup;

  constructor(
    public accountService: AccountService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    // this.firstName = this.accountService.account.firstName;
    // this.lastName = this.accountService.account.lastName;
    // this.email = this.accountService.account.email;
    const {firstName, lastName, email} = this.accountService.account

    // FormBuilder
    this.form = this.fb.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      email: [email, [Validators.required,Validators.email]],
    })

    // FormGroup
    // this.form = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    // })

    // this.form.get('firstName')
    //   .valueChanges
    //   // .pipe(debounceTime(1000)) // print every N freetime
    //   // .pipe(throttleTime(1000)) // print for first time and every N time
    //   .pipe(auditTime(1000)) // mixed debounceTime && throttleTime
    //   .subscribe(console.log);
  }

  get firstName() {
    return this.form.get('firstName')
  }

  get lastName() {
    return this.form.get('lastName')
  }

  get email() {
    return this.form.get('email')
  }

  onChange(type: 'firstName' | 'lastName' | 'email', value: string) {
    switch (type) {
      case 'firstName':
        // this.firstName = value;
        break;
      case 'lastName':
        // this.lastName = value;
        break;
      case 'email':
        // this.email = value;
        break;
    }
  }

  // checkEmail(email: string) {
  //   if (!email) {
  //     return false;
  //   }
  //   const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   return !re.test(email);
  // }

  onSubmit() {
    // this.form.value vs this.form.getRawValue()
    const value = this.form.value;
    if(this.form.valid) {
      this.accountService.account = new AccountImp(value);
    }
    // this.accountService.account = new AccountImp({ firstName: this.firstName, lastName: this.lastName, email: this.email });
  }

}

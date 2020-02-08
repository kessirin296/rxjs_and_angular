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

  public form: FormGroup;

  constructor(
    public accountService: AccountService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    const { firstName, lastName, email } = this.accountService.account;

    this.form = this.fb.group({
      firstName: [firstName, [Validators.required]],
      lastName: [lastName, [Validators.required]],
      email: [email, [Validators.required, Validators.email]],
    });

    this.form.get('email').valueChanges.subscribe(() => {
      console.log(this.form.get('email').errors);
    })
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  // checkEmail(email: string) {
  //   if (!email) {
  //     return false;
  //   }
  //   const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   return !re.test(email);
  // }

  onSubmit() {
    // this.form.value vs this.form.getRawValue();
    const value = this.form.getRawValue();
    if (this.form.valid) {
      this.accountService.account = new AccountImp(value);
      alert('success');
    }
  }

}

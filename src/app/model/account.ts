export interface Account {
  firstName: string;
  lastName: string;
  email: string;
}
export class AccountImp implements Account {
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(args?: Partial<Account>) {
    this.firstName = args && args.firstName || '';
    this.lastName = args && args.lastName || '';
    this.email = args && args.email || '';
  }
}

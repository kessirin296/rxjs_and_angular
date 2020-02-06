export interface Account {
  firstName: string;
  lastName: string;
}
export class AccountImp implements Account {
  public firstName: string;
  public lastName: string;

  constructor(args?: Partial<Account>) {
    this.firstName = args && args.firstName || '';
    this.lastName = args && args.lastName || '';
  }
}

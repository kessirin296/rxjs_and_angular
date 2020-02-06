interface ITodo {
  message: string;
  isSuccess: boolean;
  isAchieve: boolean;
}

export class Todo implements ITodo {
  private _id: string;
  public message: string;
  public isSuccess: boolean;
  public isAchieve: boolean;

  constructor(args?: Partial<ITodo>) {
    this.message = args && args.message || '';
    this.isSuccess = args && args.isSuccess || false;
    this.isAchieve = args && args.isAchieve || false;
    this._id = new Date().getTime().toString();
  }

  get id(): string {
    return this._id;
  }
}

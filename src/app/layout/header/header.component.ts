import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public todo: Observable<Todo[]>;
  public done: Observable<Todo[]>;
  public notDone: Observable<Todo[]>;
  public achieved: Observable<Todo[]>;
  public achievedDone: Observable<Todo[]>;
  public achievedNotDone: Observable<Todo[]>;

  constructor(
    public todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todo = this.todoService.todo$.asObservable();
    this.done = this.todo.pipe(this.customPipe(true))
    this.notDone = this.todo.pipe(this.customPipe(false))
    const achieved$ = this.todo.pipe(map(todoList => todoList.filter(todo => todo.isAchieve)))
    this.achieved = achieved$;
    this.achievedDone = achieved$.pipe(this.customPipe(true));
    this.achievedNotDone = achieved$.pipe(this.customPipe(false));
    // or
    this.todoService.todo$.subscribe({
      next: () => {}
    })
  }

  private customPipe(isSuccess: boolean) {
    return pipe(map((todoList: Todo[]) => todoList.filter(todo => todo.isSuccess === isSuccess)))
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Observable, pipe, Subscription, Subject } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { map, take, takeWhile, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public todo: Observable<Todo[]>;
  public done: Observable<Todo[]>;
  public notDone: Observable<Todo[]>;
  public achieved: Observable<Todo[]>;
  public achievedDone: Observable<Todo[]>;
  public achievedNotDone: Observable<Todo[]>;

  public subscription = new Subscription();
  public subject = new Subject<void>();
  public alive = true;

  constructor(
    public todoService: TodoService,
    private httpClint: HttpClient
  ) { }

  private customPipe(isSuccess: boolean) {
    return pipe(map((todoList: Todo[]) => todoList.filter(todo => todo.isSuccess === isSuccess)))
  }

  ngOnInit() {
    this.todoService.todo$
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (todoList) => {
          if (todoList.length > 50) {
            this.alive = false;
          }
        }
      })


    this.todo = this.todoService.todo$.asObservable();
    this.done = this.todo.pipe(this.customPipe(true));
    this.notDone = this.todo.pipe(this.customPipe(false));
    const achieved$ = this.todo.pipe(map((todoList) => todoList.filter(todo => todo.isAchieve)));
    this.achieved = achieved$;
    this.achievedDone = achieved$.pipe(this.customPipe(true));
    this.achievedNotDone = achieved$.pipe(this.customPipe(false));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    this.subject.next();
    this.subject.complete();
  }

}

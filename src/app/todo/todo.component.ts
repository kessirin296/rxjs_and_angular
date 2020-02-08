import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { CardComponent } from './card/card.component';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChildren(CardComponent) appCard: QueryList<CardComponent>;

  public todoList: Observable<Todo[]>;
  public todoAchieve: Observable<Todo[]>;

  constructor(
    private todoService: TodoService
  ) { }

  filterPipe(isAchieve: boolean) {
    return pipe(
      map((todoList: Todo[]) => todoList.filter(todo => todo.isAchieve === isAchieve))
    );
  }

  ngOnInit() {
    this.todoList = this.todoService.todo$
      .pipe(this.filterPipe(false));
    this.todoAchieve = this.todoService.todo$
      .pipe(this.filterPipe(true));
  }

  onEnter(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value) {
      const todo = new Todo({ message: value });
      this.todoService.addTodo(todo);
      (event.target as HTMLInputElement).value = '';
    }
  }

  onAchieve(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  onDone(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

}

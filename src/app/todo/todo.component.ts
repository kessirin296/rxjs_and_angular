import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoList: Observable<Todo[]>;
  // public todoList: Todo[] = [];
  public todoAchieve: Observable<Todo[]>;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoList = this.todoService.todo$.pipe(this.filterPipe(false))
    // this.todoList = this.todoService.todoList.filter(d => !d.isAchieve);
    this.todoAchieve = this.todoService.todo$.pipe(this.filterPipe(true));
  }

  filterPipe(isAchieve: boolean) {
    return pipe(
      map((todoList: Todo[]) => todoList.filter(todo => todo.isAchieve === isAchieve))
    )
  }

  onEnter(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
    
    if (value) {
      const todo = new Todo({ message: value });
      this.todoService.addTodo(todo);
      // const todoList = this.todoService.todo$.getValue()
      // this.todoService.todo$.next([...todoList, todo]);
      // this.todoList.push(todo);
      (event.target as HTMLInputElement).value = '';
    }
    console.log('todoList : ',this.todoList);
    
  }

  onAchieve(todo: Todo) {
    // this.todoAchieve.push(todo);
    this.todoService.updateTodo(todo)
  //   this.todoList = this.todoList.filter((t) => t.id !== todo.id);
  }

  onDone(todo: Todo) {
    this.todoService.updateTodo(todo)
  }

  updateService() {
    // this.todoService.todoList = [...this.todoList, ...this.todoAchieve];
  }

}

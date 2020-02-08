import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private key = 'todo';
  public todo$: BehaviorSubject<Todo[]>;

  constructor() {
    this.todo$ = new BehaviorSubject<Todo[]>(this.todoList);
    this.todo$.subscribe({
      next: (value) => this.todoList = value
    });
  }

  addTodo(todo: Todo) {
    const todoList = this.todo$.getValue();
    this.todo$.next([...todoList, todo]);
  }

  updateTodo(todo: Todo) {
    const todoList = this.todo$.getValue().map((t) => t.id === todo.id ? todo : t);
    this.todo$.next(todoList);
  }

  get todoList(): Todo[] {
    const value = JSON.parse(localStorage.getItem(this.key));
    return (Array.isArray(value) ? value : []).map(a => new Todo(a));
  }

  set todoList(todo: Todo[]) {
    const value = JSON.stringify(todo);
    localStorage.setItem(this.key, value);
  }
}

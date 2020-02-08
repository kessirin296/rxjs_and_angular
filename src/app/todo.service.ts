import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private key = 'todo';
  public todo$: BehaviorSubject<Todo[]>;

  constructor() { 
    this.todo$ = new BehaviorSubject<Todo[]>(this.todoList)
    this.todo$.subscribe({
      next: (value) => {this.todoList = value}
    })
  }

  addTodo(todo: Todo) {
    console.log(todo);
    
    const todoList = this.todo$.getValue();
    console.log('todoList add : ', todoList);
    
    this.todo$.next([...todoList, todo])
  }

  updateTodo(todo: Todo) {
    const todoList = this.todo$.getValue().map((_todo) => _todo.id === todo.id ? todo : _todo);
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

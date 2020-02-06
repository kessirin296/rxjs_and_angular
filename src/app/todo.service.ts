import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private key = 'todo';

  constructor() { }

  get todoList(): Todo[] {
    const value = JSON.parse(localStorage.getItem(this.key));
    return Array.isArray(value) ? value : [];
  }

  set todoList(todo: Todo[]) {
    const value = JSON.stringify(todo);
    localStorage.setItem(this.key, value);
  }
}

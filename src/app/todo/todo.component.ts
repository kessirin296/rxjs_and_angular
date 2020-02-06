import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoList: Todo[] = [];
  public todoAchieve: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList.filter(d => !d.isAchieve);
    this.todoAchieve = this.todoService.todoList.filter(d => d.isAchieve);
  }

  onEnter(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value) {
      const todo = new Todo({ message: value });
      this.todoList.push(todo);
      (event.target as HTMLInputElement).value = '';
    }
    this.updateService();
  }

  onAchieve(todo: Todo) {
    this.todoAchieve.push(todo);
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    this.updateService();
  }

  updateService() {
    this.todoService.todoList = [...this.todoList, ...this.todoAchieve];
  }

}

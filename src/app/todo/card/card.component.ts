import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() todo: Todo;

  @Output() achieve$: EventEmitter<Todo> = new EventEmitter();
  @Output() done$: EventEmitter<Todo> = new EventEmitter();

  constructor(
    public todoService: TodoService,
  ) { }

  ngOnInit() {
  }

  public onAchieve() {
    this.todo.isAchieve = true;
    this.achieve$.emit(this.todo);
  }

  public onChange(event: Event) {
    const value = (event.target as HTMLInputElement).checked;
    this.todo.isSuccess = value;
    this.done$.emit(this.todo);
  }

}

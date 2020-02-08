import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() todo: Todo;
  @Output() achieve$: EventEmitter<Todo> = new EventEmitter();
  @Output() done$: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  constructor() { }

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

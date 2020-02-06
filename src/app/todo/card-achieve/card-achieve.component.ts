import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-card-achieve',
  templateUrl: './card-achieve.component.html',
  styleUrls: ['./card-achieve.component.scss']
})
export class CardAchieveComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}

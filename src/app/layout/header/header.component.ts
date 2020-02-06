import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public todo = 0;
  public done = 0;
  public notDone = 0;
  public achieved = 0;

  constructor(
    public todoService: TodoService,
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  newTodo: String;
  @Output()
  createTodo = new EventEmitter<string>();

  constructor() {}
  onSubmit(value: string) {
    this.createTodo.emit(value);
  }
  ngOnInit() {}
}

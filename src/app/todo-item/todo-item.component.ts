declare var M: any;
import { Component, NgModule, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  edit: boolean = false;
  constructor() {}
  switchDone(): void {
    this.todo.done = !this.todo.done;
  }
  changeName(): void {
    M.toast({ html: 'Tache ' + this.todo.label + ' a été mise à jour !' });
    this.edit = false;
  }
  editMode(): void {
    this.edit = true;
  }
  ngOnInit() {}
}

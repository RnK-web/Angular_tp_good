declare var M: any;
import {
  Component,
  NgModule,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output()
  todoChanges = new EventEmitter<Todo>();

  @Output()
  todoDeleted = new EventEmitter<Todo>();

  newName: string = '';
  edit: boolean = false;
  constructor() {}
  switchDone(): void {
    this.todo.done = !this.todo.done;
    this.todoChanges.emit(this.todo);
  }
  changeName(newName: string): void {
    this.todo.label = newName;
    this.todoChanges.emit(this.todo);
    this.edit = false;
  }
  todoDeletion() {
    this.todoDeleted.emit(this.todo);
  }
  editMode(): void {
    this.edit = true;
  }
  ngOnInit() {}
}

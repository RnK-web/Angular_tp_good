declare var M: any;

import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
})
export class TodoListsComponent implements OnInit {
  name: string;
  todoService: TodoServiceService;

  constructor(todoService: TodoServiceService) {
    this.todoService = todoService;

    this.todoService.createTodo('Premier');
    this.todoService.createTodo('Deuxieme');
    this.todoService.createTodo('Troisieme');
  }
  createTodo(name: string) {
    M.toast({ html: 'Tache ' + name + ' a été crée !' });
    this.todoService.createTodo(name);
  }
  ngOnInit() {}
}

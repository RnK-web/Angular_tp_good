declare var M: any;

import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css'],
})
export class TodoListsComponent implements OnInit {
  name: string;
  todoService: TodoServiceService;
  todos: Todo[] = [];
  loading: boolean = true;

  constructor(todoService: TodoServiceService) {
    this.todoService = todoService;
  }
  createTodo(name: string) {
    this.todoService.createTodo(name).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + name + ' a été crée !' });
      } else {
        M.toast({ html: 'Erreur serveur' });
      }
    });
    this.refreshTodos();
  }

  notifyUser(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + todo.label + ' a été mise à jour !' });
      } else {
        M.toast({ html: 'Erreur Serveur' });
      }
    });
  }

  delTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + todo.label + ' a été supprimée !' });
      } else {
        M.toast({ html: 'Erreur Serveur' });
      }
    });
    this.refreshTodos();
  }

  refreshTodos() {
    this.loading = true;
    this.todoService.getTodos().subscribe((todoList) => {
      this.todos = todoList;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.refreshTodos();
  }
}

declare var M: any;

import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';

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
  username: string;

  constructor(todoService: TodoServiceService, private route: ActivatedRoute) {
    this.todoService = todoService;
  }
  createTodo(name: string) {
    this.todoService.createTodo(this.username, name).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + name + ' a été crée !' });
        this.refreshTodos();
      } else {
        M.toast({ html: 'Erreur serveur' });
      }
    });
  }

  notifyUser(todo: Todo) {
    this.todoService.updateTodo(this.username, todo).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + todo.label + ' a été mise à jour !' });
      } else {
        M.toast({ html: 'Erreur Serveur' });
      }
    });
  }

  delTodo(todo: Todo) {
    this.todoService.deleteTodo(this.username, todo.id).subscribe((resp) => {
      if (resp) {
        M.toast({ html: 'Tache ' + todo.label + ' a été supprimée !' });
        this.refreshTodos();
      } else {
        M.toast({ html: 'Erreur Serveur' });
      }
    });
  }

  refreshTodos() {
    this.loading = true;
    this.todoService.getTodos(this.username).subscribe((todoList) => {
      this.todos = todoList;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.refreshTodos();
  }
}

import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoServiceService {
  todos: Todo[] = [];
  constructor() {}
  getTodos(): Todo[] {
    return this.todos;
  }
  createTodo(label: string): void {
    this.todos.push({
      label: label,
      done: false,
      id: Math.floor(Math.random() * 1000),
      creationDate: new Date().valueOf(),
    });
  }
}

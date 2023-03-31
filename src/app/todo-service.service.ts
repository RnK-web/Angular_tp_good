import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, TodoResponse, CreateTodo, UpdateTodo } from './todo';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoServiceService {
  todos: Todo[] = [];
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient
      .get<TodoResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo?delay=1000'
      )
      .pipe(map((todoResp) => todoResp.todos));
  }
  createTodo(label: string): Observable<boolean> {
    let todo: CreateTodo = { label: label };
    return this.httpClient
      .post(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo',
        todo
      )
      .pipe(
        map((answer) => true),
        catchError((err) => of(false))
      );
  }
  updateTodo(todo: Todo): Observable<boolean> {
    let newTodo: UpdateTodo = { label: todo.label, done: todo.done };
    let url: string =
      'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' +
      todo.id;
    return this.httpClient.put(url, newTodo).pipe(
      map((resp) => true),
      catchError((err) => of(false))
    );
  }
  deleteTodo(id: string): Observable<boolean> {
    let url: string =
      'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' +
      id;
    return this.httpClient.delete(url).pipe(
      map((resp) => true),
      catchError((err) => of(false))
    );
  }
}

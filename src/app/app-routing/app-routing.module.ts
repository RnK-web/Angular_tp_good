import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TodoListsComponent } from '../todo-lists/todo-lists.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'todo/:username', component: TodoListsComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

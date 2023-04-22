import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { CustomDatePipe } from './custom-date.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TodoListsComponent,
    TodoItemComponent,
    TodoFormComponent,
    LoginComponent,
    CustomDatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

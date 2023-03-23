import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TodoListsComponent,
    TodoItemComponent,
    CustomDatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

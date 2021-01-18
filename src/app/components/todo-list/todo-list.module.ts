import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../services/todo.service';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  // declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    // BrowserAnimationsModule,
  ],
  providers: [
    TodoService
  ]
})
export class TodoListModule { }

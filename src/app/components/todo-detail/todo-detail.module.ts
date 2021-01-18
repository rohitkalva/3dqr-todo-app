import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from '../../services/todo.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoDetailModule { }

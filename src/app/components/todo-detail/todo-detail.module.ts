import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from '../../services/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoDetailModule { }

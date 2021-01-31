import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  viewTask: FormGroup;
  public todoId: number;
  formSubmitted = false;
  public todos: Todo[] = [];
  public todoDetail = {} as Todo;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
    this.viewTask = this.fb.group({
      title: [''],
      description: [''],
      project: [''],
      tag: [''],
      date: [''],
      id: [''],
    });
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params.id;
      if (this.todoId !== undefined) {
        this.getTodoDetailById(this.todoId);
      } else {
        alert('Select correct task');
        this.router.navigate(['/']);
      }
    });
  }

  getTodoDetailById(id: any): void {
    this.todoDetail = this.todoService.getTodoById(id);
    this.viewTask = this.fb.group({
      title: this.todoDetail.title,
      description: this.todoDetail.description,
      project: this.todoDetail.project,
      tag: this.todoDetail.tag,
      date: this.todoDetail.date,
    });
  }

  getRandomColor(): any {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  onClickSubmit(): void {
    if (!this.viewTask.valid) {
      this.toastr.error('Error in updating the task!', 'Error');
      return;
    }
    this.todoService.deleteTodoDetail(this.todoId);
    const tempDate = this.viewTask.value.date;
    delete this.viewTask.value.date;
    const date = moment(tempDate).format('YYYY-MM-DD');
    this.viewTask.value.id = Date.now();
    this.viewTask.value.date = date;
    this.viewTask.value.color = this.getRandomColor();
    this.todoService.updateTodoById(this.viewTask.value);
    this.router.navigate(['/todo-list']);
    this.toastr.success('Task updated successfully!', 'Updated');
  }

  deleteToDobyId(): void {
    this.todoService.deleteTodoDetail(this.todoId);
    this.router.navigate(['/']);
    this.toastr.success('Task deleted successfully!', 'Deleted');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  AddTask: FormGroup;
  public todoId: number;
  formSubmitted = false;
  public todoDetail =  {} as Todo;
  public mode: string;
  constructor(private fb: FormBuilder, private router: Router,
              private todoService: TodoService, private activatedRoute: ActivatedRoute) {
      this.AddTask = this.fb.group({
      title: [''],
      description: [''],
      project: [''],
      tag: [''],
      date: ['']
    });
     }

  ngOnInit(): void {
}
  getRandomColor(): any {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  onClickSubmit(): void {
    if (!this.AddTask.valid) {
      return;
    }
    this.router.navigate(['/todo-list']);
    const tempDate = this.AddTask.value.date;
    delete this.AddTask.value.date;
    const date = moment(tempDate).format('YYYY-MM-DD');
    this.AddTask.value.id = Date.now();
    this.AddTask.value.date = date;
    this.AddTask.value.color = this.getRandomColor();
    this.todoService.updateTodoById(this.AddTask.value);
  }
}

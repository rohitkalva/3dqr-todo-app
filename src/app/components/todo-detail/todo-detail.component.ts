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
  formSubmitted: boolean = false;
  public todoDetail = <Todo>{};
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
    // tslint:disable-next-line: deprecation
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      console.log(this.todoId)
      if (this.todoId !== undefined) {
            console.log(this.todoId);
            this.getTodoDetailById(this.todoId);
            this.mode = 'Edit';    
      } else {
            // this.todoId = null;
            console.log(this.todoId);
            this.todoDetail['id'] = 0;
            this.mode = 'Add';   
      }
    }); 
}

  onClickSubmit(): void {
    if (!this.AddTask.valid) {
      return;
    }
    this.router.navigate(['/todo-list']);
    const temp_date = this.AddTask.value.date;
    delete this.AddTask.value.date;
    const date = moment(temp_date).format("YYYY-MM-DD");

    this.AddTask.value['id'] = Date.now();
    this.AddTask.value['date'] = date;

    this.todoService.updateTodoById(this.AddTask.value);
    console.log(this.AddTask.value);
  }
  // onClickCancel() {
  //   this.router.navigate(['/todo-list']);
  // }

  getTodoDetailById(id: number): void {
    // tslint:disable-next-line: radix
    this.todoDetail = this.todoService.getTodoById(id);
    console.log(this.todoDetail);
  }

}

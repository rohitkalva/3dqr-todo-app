import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  AddTask: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private router: Router
  ) { }

  ngOnInit(): void {
    this.AddTask = this.formBuilder.group({
      title: [null],
      description: [null],
      project: [null],
      tag: [null],
    });
  }

  onClickSubmit(): void {
    if (!this.AddTask.valid) {
      return;
    }
    this.router.navigate(['/todo-list']);
    console.log(this.AddTask.value);
  }
  // onClickCancel() {
  //   this.router.navigate(['/todo-list']);
  // }

}

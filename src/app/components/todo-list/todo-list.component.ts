import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cpuUsage } from 'process';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  breakpoint: number;

  constructor(private router: Router, private todoService: TodoService) {}

  title = 'todo-app';

  ngOnInit(): void {
    this.loadAllTodoList();
    this.onResize(window.innerWidth);
  }
  loadAllTodoList(): void {
    this.todos = this.todoService.getAllTodos();
  }

  onClickAddTodo(): void {
    this.router.navigate(['/todo-detail']);
  }

  getRandomColor(): any {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  onResize(event): void {
    const windowsize = event;
    if (windowsize > 250 && windowsize <= 500) {
      this.breakpoint = 2;
    } else if (windowsize > 500 && windowsize <= 750) {
      this.breakpoint = 3;
    } else if (windowsize > 750 && windowsize <= 1000) {
      this.breakpoint = 4;
    } else if (windowsize > 1000 && windowsize <= 1250) {
      this.breakpoint = 5;
    } else if (windowsize > 1250 && windowsize <= 1500) {
      this.breakpoint = 6;
    } else if (windowsize > 1500 && windowsize <= 1750) {
      this.breakpoint = 7;
    } else {
      this.breakpoint = 7;
    }
  }

  // getTodoById(id: any): void {
  //   // tslint:disable-next-line: radix onClickEditTodoDetail
  //   const temp = this.todoService.getTodoById(id);
  //   console.log(temp);
  //   // this.router.navigate(['/todo-detail'], {queryParams: {id}});
  // }

  todoEdit(id: any): void {
    const todoValue = this.todoService.getTodoById(id);
    console.log(todoValue);
    this.router.navigate(['/todo-edit'], {queryParams: {id}});
  }
}

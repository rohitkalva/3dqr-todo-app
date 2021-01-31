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
    const todo = this.todoService.getAllTodos();
    const sortedActivities = todo.sort(function compare(a: any, b: any): any {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    this.todos = sortedActivities;
  }

  onClickAddTodo(): void {
    this.router.navigate(['/todo-detail']);
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

  todoEdit(id: any): void {
    const todoValue = this.todoService.getTodoById(id);
    this.router.navigate(['/todo-edit'], {queryParams: {id}});
  }
}

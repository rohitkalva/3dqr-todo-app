import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  // match: Todo[];
  constructor( private router: Router, private todoService: TodoService ) { }


  title = 'todo-app';

  gridColumns = 2;

  ngOnInit(): void {
      this.loadAllTodoList();
  }
  loadAllTodoList(): void {
    this.todos = this.todoService.getAllTodos();
  }

  onClickEditTodoDetail(id: any): void {
      console.log(id);
      this.router.navigate(['/todo-detail'], {queryParams: {id}});
  }

  onClickAddTodo(): void {
      this.router.navigate(['/todo-detail']);
  }

  onClickTodoDelete(id: any): void {
      this.todoService.deleteTodoDetail(id);
      this.loadAllTodoList();
  }

  toggleGridColumns(): void {
    this.gridColumns = this.gridColumns === 2 ? 3 : 2;
    // this.gridColumns = 2;
  }
  click_testing(id: number): void{
      console.log('button clicked');
      console.log(id);
      // this.router.navigate(['/todo-detail'], {queryParams: {id}});

  }

}



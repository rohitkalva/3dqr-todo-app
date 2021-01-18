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
  constructor( private router: Router, private todoService: TodoService ) { }
  public todos: Todo[] = [];

  // tslint:disable-next-line: member-ordering
  title = 'todo-app';
//   match = [{
//     'title':'Time to Eat',
//     'description': 'eat on time to stay healthy',
//     'project': 'eat',
//     'timestamp': '2021-01-26',
//     'tag':'eat'
//   },
//   {
//     'title':'Working Day',
//     'description': 'start working on time',
//     'project': 'start work',
//     'timestamp': '2021-01-27',
//     'tag':'work'
//   },
//   {
//     'title':'Time to Eat',
//     'description': 'eat on time to stay healthy',
//     'project': 'eat',
//     'timestamp': '2021-01-26',
//     'tag':'eat'
//   },
//   {
//     'title':'Working Day',
//     'description': 'start working on time',
//     'project': 'start work',
//     'timestamp': '2021-01-27',
//     'tag':'work'
//   }
// ];
 match = this.todoService.todos;
  gridColumns = 2;

  ngOnInit(): void {
      this.loadAllTodoList();
  }
  loadAllTodoList(): void {
      this.todos = this.todoService.getAllTodos();
      const match = this.todoService.todos;
      console.log(match[0].tag);
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
    // this.gridColumns = this.gridColumns === 2 ? 3 : 2;
    this.gridColumns = 2;
  }
  click_testing(): void{
      console.log('button clicked');
  }

}



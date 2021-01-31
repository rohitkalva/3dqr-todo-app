import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {
  public todos: Todo[] = [];
  constructor() {}

  getAllTodos(): Todo[] {
    if (localStorage.getItem('localData') !== null) {
      this.todos = JSON.parse(localStorage.getItem('localData'));
    } else {
      const todoArrayData = [];
      localStorage.setItem('localData', JSON.stringify(todoArrayData));
      this.todos = JSON.parse(localStorage.getItem('localData'));
    }
    return this.todos;
  }

  getTodoById(timeStamp: any): Todo {
    const todoArray = JSON.parse(localStorage.getItem('localData'));
    // tslint:disable-next-line: radix
    const temp = todoArray.filter((todo) => todo.id === parseInt(timeStamp)).pop();
    return temp;
  }

  updateTodoById(todo: Todo): Todo {
    if (todo.id !== 0) {
      const todoArray = JSON.parse(localStorage.getItem('localData'));
      // let todoid = todoArray.length;
      // todo.id = ++todoid;
      todoArray.push(todo);
      localStorage.setItem('localData', JSON.stringify(todoArray));
      // } else {
      //   const todoSaveArray = JSON.parse(localStorage.getItem('localData'));
      //   for (const i in todoSaveArray) {
      //     if (todoSaveArray[i].id === todo.id) {
      //       todoSaveArray[i] = todo;
      //       localStorage.setItem('localData', JSON.stringify(todoSaveArray));
      //     }
      //   }
    }
    return todo;
  }

  deleteTodoDetail(id: any): void {
    const todoArray = JSON.parse(localStorage.getItem('localData'));
    for (const i in todoArray) {
      // tslint:disable-next-line: radix
      if (todoArray[i].id === parseInt(id)) {
        todoArray.splice(i, 1);
        localStorage.setItem('localData', JSON.stringify(todoArray));
      }
    }
  }
}

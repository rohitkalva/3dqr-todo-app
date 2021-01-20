import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';

@Injectable()
export class TodoService {

  public todos: Todo[] = [];
  constructor() {}

  getAllTodos(): Todo[] {

    if (localStorage.getItem('localData') !== null) {
      this.todos = JSON.parse(localStorage.getItem('localData'));
      console.log('Second');
    }
    else {
      const todoArrayData = [];
      localStorage.setItem('localData', JSON.stringify(todoArrayData));
      this.todos = JSON.parse(localStorage.getItem('localData'));
      console.log('First');
    }
    return this.todos;
  }

  getTodoById(id: number): Todo {
    const todoArray = JSON.parse(localStorage.getItem('localData'));
    console.log(todoArray);
    return todoArray
      .filter(todo => todo.id === id)
      .pop();
  }

  updateTodoById(todo): Todo {
    if (todo.id !== 0) {
      const todoArray = JSON.parse(localStorage.getItem('localData'));
      // let todoid = todoArray.length;
      // todo.id = ++todoid;
      todoArray.push(todo);
      console.log(todoArray)
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
      if (todoArray[i].id === id) {
        todoArray.splice(i, 1);
        localStorage.setItem('localData', JSON.stringify(todoArray));
      }
    }
  }
}

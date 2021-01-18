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
    } else {
      const todoArrayData = [{
          id: 1,
          title: 'Shopping.',
          description: 'Shop for grocerries.',
          project: 'Shopping',
          tag: 'purchase',
          date: '2021-01-20',
        },
        {
          id: 2,
          title: 'Submit Assignment.',
          description: 'Submit assignment for chapter 5.',
          project: 'assignment',
          tag: 'study',
          date: '2021-01-25',
        }
      ];
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
    if (todo.id === 0) {
      const todoArray = JSON.parse(localStorage.getItem('localData'));
      let todoid = todoArray.length;
      todo.id = ++todoid;
      todoArray.push(todo);
      console.log(todoArray)
      localStorage.setItem('localData', JSON.stringify(todoArray));
    } else {
      const todoSaveArray = JSON.parse(localStorage.getItem('localData'));
      console.log(todoSaveArray)
      for (const i in todoSaveArray) {
        if (todoSaveArray[i].id === todo.id) {
          todoSaveArray[i] = todo;
          localStorage.setItem('localData', JSON.stringify(todoSaveArray));
        }
      }
      console.log('done')
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

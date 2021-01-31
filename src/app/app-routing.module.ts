import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'todo-list',
      pathMatch: 'full'
  },
  {
      path: 'todo-list',
      loadChildren: () => import('./components/todo-list/todo-list.module').then(mod => mod.TodoListModule)
  },
  {
      path: 'todo-detail',
      loadChildren: () => import('./components/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
  },
  {
    path: 'todo-edit',
    loadChildren: () => import('./components/todo-edit/todo-edit.module').then(mod => mod.TodoEditModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

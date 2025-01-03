import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import { OpinionComponent } from './opinion/opinion.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: 'greetings', component: GreetingsComponent },
  { path: 'opinion', component: OpinionComponent },
  { path: 'todo', component: TodoComponent },
];

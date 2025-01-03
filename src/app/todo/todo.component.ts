import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  newTask: string = '';
  tasks: string[] = [];
  addTask(event: Event) {
    event.preventDefault();
    this.tasks.push(this.newTask);
    console.log('Add task: ', this.newTask);
    console.log('Tasks: ', this.tasks);
    this.newTask = '';
  }
}

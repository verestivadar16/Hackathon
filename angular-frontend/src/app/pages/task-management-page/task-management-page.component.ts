import { Component, OnInit } from '@angular/core';
import { TaskDTO } from '../../models/task-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-management-page',
  templateUrl: './task-management-page.component.html',
  styleUrl: './task-management-page.component.scss'
})
export class TaskManagementPageComponent implements OnInit{
  today: number = Date.now();
  tasks: TaskDTO[] = [];

  ngOnInit(): void {
    this.generateMOCKTasks();
    //TODO: get tasks from the server
    console.log('TaskManagementPageComponent OnInit');

    // throw new Error('Method not implemented.');
  }

  generateMOCKTasks(): void {
    for (let i = 0; i < 10; i++) {
      let date = new Date(this.today + i * 24 * 60 * 60 * 1000);
      this.tasks.push({
        id: i,
        name: `Task ${i}`,
        description: `Description ${i}`,
        dueDate: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
      });
    }
  }

}

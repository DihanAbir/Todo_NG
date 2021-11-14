import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;

  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToogleReminder = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: any): void {
    this.onDeleteTask.emit(item);
  }
  onToggle(task: Task): void {
    this.onToogleReminder.emit(task);
  }
}

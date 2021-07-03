import { Component, Input, OnInit } from '@angular/core';
import { scheduler } from '../scheduler';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  @Input() Scheduler : scheduler[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

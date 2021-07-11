import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { scheduler } from '../scheduler';
import { schedulerService } from '../scheduler/schedulerService';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  sched : scheduler[] | undefined;
  

  constructor(private schedulerService : schedulerService , private router : Router ) { }

  ngOnInit(): void {

    this.getAll();


  }

  private getAll(){
    this.schedulerService.listOfOrders().subscribe(data => {this.sched, console.log(data)});
  }

}

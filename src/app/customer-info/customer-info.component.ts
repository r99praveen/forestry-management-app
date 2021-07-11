import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {customerInfo} from '../cutomerInfo';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { scheduler } from '../scheduler';
import { schedulerService } from '../scheduler/schedulerService';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  // customerInfo : customerInfo[] | undefined;
  order: Order = new Order();
  

  
    
  addForm! : NgForm;

  

  constructor(private ord : OrderService , private sched : schedulerService , private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSubmit(){

  }

  addToOrder(){

    this.ord.addOrder(this.order).subscribe(data => {this.router.navigate(['/thanks-message'])},
     error => console.log(error) ),
     this.sched.addScheduler(this.order).subscribe(data => {this.router.navigate(['/orders'])}, error => console.log(error))

  }
  

  // // placeOrder(){
  // //   console.log('ordered placed');
  // //   this.placeOrder

  // }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {customerInfo} from '../cutomerInfo';
import { scheduler } from '../scheduler';
import { schedulerService } from '../scheduler/schedulerService';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  // customerInfo : customerInfo[] | undefined;
  schedule: scheduler = new scheduler();
  
  addForm! : NgForm;

  

  constructor(private sche : schedulerService , private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addToScheduler(){

    this.sche.addScheduler(this.schedule).subscribe(data => {this.router.navigate(['/scheduler'])},
     error => console.log(error) )

  }

  // // placeOrder(){
  // //   console.log('ordered placed');
  // //   this.placeOrder

  // }

}

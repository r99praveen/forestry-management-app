import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scheduler } from '../scheduler';
import { schedulerService } from './schedulerService';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

   id : number | undefined ;

   Scheduler : scheduler = new scheduler();
 
  constructor(private sche : schedulerService , private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sche.getById(this.id).subscribe(data => {this.Scheduler = data; console.log(data)}, error => console.log(error))
  }

  onSubmit(){
    
  }

  addToSchedulers(){

    this.sche.addSchedulers(this.Scheduler).subscribe(data => {this.router.navigate(['/order-summary'])},
     error => console.log(error) )

    

  }
}

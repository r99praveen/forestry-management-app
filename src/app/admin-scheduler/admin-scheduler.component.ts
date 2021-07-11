import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-scheduler',
  templateUrl: './admin-scheduler.component.html',
  styleUrls: ['./admin-scheduler.component.css']
})
export class AdminSchedulerComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
    logout() {
      this.router.navigate(['/scheduler-Login'])
   
  }
  itemImageUrl = '../assets/orders.jpg';
  itemImageUrl1 = '../assets/contracts.jpg';
}
// function logout() {
//   throw new Error('Function not implemented.');
// }


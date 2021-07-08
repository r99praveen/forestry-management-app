import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : Order[] | undefined;
  constructor(private orderService: OrderService , private router : Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.orderService.listOrders().subscribe(data => { this.orders = data, console.log(data) });
  }
DeleteOrder(id: number){
  this.orderService.deleteOrder(id).subscribe(data =>{console.log(data),this.getOrders},error => console.log(error))
}

schedule(id : number){
  this.router.navigate([`/scheduler` , id])
}


}

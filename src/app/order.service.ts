import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = 'http://localhost:8085/orders/';

  constructor(private httpClient: HttpClient) { }

   
   addOrder(order: Order): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'save', order);
  }

  listOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.baseURL}` + 'getAll');
  }

deleteOrder(id : number) : Observable<any[]>{

  return this.httpClient.delete<any[]>(`${this.baseURL}` + `delete/${id}`)
}

placeOrder(order: Order): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}` + 'save', order);
}

}

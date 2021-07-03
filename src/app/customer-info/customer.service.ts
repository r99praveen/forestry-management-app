// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Customer } from './customer';

// @Injectable({
//   providedIn: 'root',
// })
// export class OrderService {
//   private baseURL = 'http://localhost:8082/customers/';

//   constructor(private httpClient: HttpClient) {}

//   getOrderList(): Observable<Customer[]> {
//     return this.httpClient.get<Customer[]>(`${this.baseURL}` + 'getAll');
//   }

//   createOrder(customer: Customer): Observable<Object> {
//     return this.httpClient.post(`${this.baseURL}` + 'save', customer);
//   }

//   getOrderById(id: number): Observable<Customer> {
//     return this.httpClient.get<Customer>(`${this.baseURL}` + `/getById/${id}`);
//   }

  

//   deleteOrder(id: number) : Observable<Object>{
//     return this.httpClient.delete(`${this.baseURL}/delete/${id}`)
//   }
// }

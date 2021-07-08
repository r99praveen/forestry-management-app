import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { scheduler } from '../scheduler';
import { Order } from '../order';


@Injectable({
  providedIn: 'root',
})

export class schedulerService {

//   private baseURL = 'http://localhost:8085/orders/';

  constructor(private httpClient: HttpClient) { }

  // addScheduler(schedule: scheduler):Observable<any>{
  //     return this.httpClient.post<any>('http://localhost:8085/orders/save',schedule)
  // }

  getById(id : number | undefined) : Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8085/scheduler/getById/${id}`)
  }

  addScheduler(order : Order) : Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8085/scheduler/save` , order )

  
  }


  


  

 


}

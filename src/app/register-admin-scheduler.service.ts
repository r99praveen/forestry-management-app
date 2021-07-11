import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/login';
import { AdminScheduler } from './AdminScheduler';

@Injectable({
  providedIn: 'root'
})
export class RegisterAdminSchedulerService {

  constructor(private httpClient: HttpClient) { }


  public loginAdminSchedulerFromRemote(login: Login): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/register-adminScheduler/login", login)
  }



  public registerAdminScheduler(adminScheduler: AdminScheduler): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/register-adminScheduler/register-scheduler", adminScheduler)
  }


  getByEmailId(emailId: String): Observable<AdminScheduler> {
    return this.httpClient.get<AdminScheduler>(`http://localhost:8085/register-adminScheduler/admin/${emailId}`);
  }


  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8085/register-adminScheduler/delete/${id}`)
  }
}

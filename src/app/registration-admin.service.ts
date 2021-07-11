import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/login';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class RegisterAdminService {

  constructor(private httpClient: HttpClient) { }


  public loginAdminFromRemote(login: Login): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/register-admin/login", login)
  }



  public registerAdmin(admin: Admin): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/register-admin/register-admin", admin)
  }


  getByEmailId(emailId: String): Observable<Admin> {
    return this.httpClient.get<Admin>(`http://localhost:8085/register-admin/admin/${emailId}`);
  }


  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8085/register-admin/delete/${id}`)
  }

}
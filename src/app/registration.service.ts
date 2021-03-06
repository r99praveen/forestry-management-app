import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/login';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }


  public loginUserFromRemote(login: Login): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/registration/login", login)
  }



  public registerUser(user: User): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/registration/registration", user)
  }


  getByEmailId(emailId: String): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8085/registration/user/${emailId}`);
  }


  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8085/registration/delete/${id}`)
  }

}
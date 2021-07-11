import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/login';
import { Admin } from '../admin';
import { RegisterAdminService } from '../registration-admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  adminData = new Admin();
  constructor(
    private registerAdminService: RegisterAdminService,
    private router: Router // here ROUTER (NOT ROUTE)
  ) { }

  ngOnInit(): void {
  }

  loginAdmin() {
    this.registerAdminService.loginAdminFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.adminData);

        //  this.isLoginSuccessfull=true;
        sessionStorage.setItem('Login', this.loginData.email)
        this.adminDetails(this.loginData.email);
        // this.router.navigate(['/user-services']);
      },
      error => {
        console.log("exception occured");
        this.message = error.error;
        //   this.message="BAD Credentials, please enter valid emailId and password"
      }
    );
  }


  // isUserLoghedIn(){
  //   let variable=sessionStorage.getItem('emailId');
  //   console.log(!(variable===null))
  //   return !(variable===null)
  // }

  gotoRegitration() {
    this.router.navigate(['/register-admin'])

  }


  adminDetails(email: String) {
    this.router.navigate([`/admin`])

  }


}
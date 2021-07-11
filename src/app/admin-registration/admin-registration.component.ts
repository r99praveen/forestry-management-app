import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegisterAdminService } from '../registration-admin.service';


@Component({
  selector: 'app-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  registerAdminData = new Admin();
  message = '';
  errorMessage: Admin = new Admin;

  isSuccessful = false;
  isSignUpFailed = false;

hide=true;
  constructor(
    private registerAdminService: RegisterAdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registerAdminService.registerAdmin(this.registerAdminData).subscribe(
      data => {
        console.log(this.registerAdminData);
        //  this.message="Registration successfull";
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("successfully registered::");
        if (this.isSuccessful) {
          this.router.navigate(['admin-login'])
        }
      },
      error => {
        console.log("error exist");
        console.log(this.registerAdminData)
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    )
  }
  }
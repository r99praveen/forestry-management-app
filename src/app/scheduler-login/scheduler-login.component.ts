import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/login';
import { AdminScheduler } from '../AdminScheduler';
import { RegisterAdminSchedulerService } from '../register-admin-scheduler.service';

@Component({
  selector: 'app-scheduler-login',
  templateUrl: './scheduler-login.component.html',
  styleUrls: ['./scheduler-login.component.css']
})
export class SchedulerLoginComponent implements OnInit {

  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  adminSchedulerData = new AdminScheduler();
  constructor(
    private registerAdminSchedulerService: RegisterAdminSchedulerService,
    private router: Router // here ROUTER (NOT ROUTE)
  ) { }

  ngOnInit(): void {
  }

  loginAdminScheduler() {
    this.registerAdminSchedulerService.loginAdminSchedulerFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.adminSchedulerData);

        //  this.isLoginSuccessfull=true;
        sessionStorage.setItem('Login', this.loginData.email)
        this.adminSchedulerDetails(this.loginData.email);
        // this.router.navigate(['/user-services']);
      },
      error => {
        console.log("exception occured");
        this.message = error.error;
        //   this.message="BAD Credentials, please enter valid emailId and password"
      }
    );

    }

    gotoRegitration() {
      this.router.navigate(['/register-scheduler'])
  
    }
  
  
    adminSchedulerDetails(email: String) {
      this.router.navigate([`/admin-scheduler`])
  
   
    }


  }

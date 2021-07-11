import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminScheduler } from '../AdminScheduler';
import { RegisterAdminSchedulerService } from '../register-admin-scheduler.service';

@Component({
  selector: 'app-scheduler-registration',
  templateUrl: './scheduler-registration.component.html',
  styleUrls: ['./scheduler-registration.component.css']
})
export class SchedulerRegistrationComponent implements OnInit {

  registerAdminSchedulerData = new AdminScheduler();
  message = '';
  errorMessage: AdminScheduler = new AdminScheduler;

  isSuccessful = false;
  isSignUpFailed = false;

hide=true;
  constructor(
    private registerAdminSchedulerService : RegisterAdminSchedulerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerScheduler() {
    this.registerAdminSchedulerService.registerAdminScheduler(this.registerAdminSchedulerData).subscribe(
      data => {
        console.log(this.registerAdminSchedulerData);
        //  this.message="Registration successfull";
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("successfully registered::");
        if (this.isSuccessful) {
          this.router.navigate(['scheduler-Login'])
        }
      },
      error => {
        console.log("error exist");
        console.log(this.registerAdminSchedulerData)
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    )
  }

}

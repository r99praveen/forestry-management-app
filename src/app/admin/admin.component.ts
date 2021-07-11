import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }


  itemImageUrl = '../assets/1.jfif';
  itemImageUrl2 = '../assets/2.JFIF';
  itemImageUrl3 = '../assets/1.jpg';
  ngOnInit(): void {
  }
  logout() {
    this.router.navigate(['/admin-login'])
} 

}
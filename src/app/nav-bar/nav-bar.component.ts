import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private currentUser: String = '';

  constructor() { }

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = userData.firstname;
    console.log(this.currentUser);
  }

}

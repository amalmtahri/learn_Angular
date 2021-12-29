import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle =  "Welcome to my Directory!";
  MyString = "Amal";
  directory = {
    name:"amal",
    age:21
  };
  alertMe(){
    alert("hey There!");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

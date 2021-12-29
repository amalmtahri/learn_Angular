import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle =  "Welcome to my Directory!";
  MyString = "Amal";
  @Input() directory:any;
  @Output() onYell = new EventEmitter();
  
  fireYellEvent(e:any){
    this.onYell.emit(e);
  }
  alertMe(){
    alert("hey There!");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

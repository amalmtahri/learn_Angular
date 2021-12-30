import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
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
  constructor(private logger:LoggingService) { }

  logIt(){
    this.logger.log();
  }
  ngOnInit(): void {
  }

}

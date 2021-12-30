import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(){
    console.log("i'm the logging service");
  }
  constructor() { }
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  directory = {
    name:"amal",
    age:21
  };
  yell(e:any){
    alert("I am yelling");
  }
}

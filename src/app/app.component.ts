import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {
  // slider,
  // transformer,
  fader,
  // stepper
} from './anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
    // slider,
    // transformer,
    // stepper
  ]

})
export class AppComponent {
  // hours;
  // minutes;
  // seconds;
  // now = new Date().getTime();
  constructor( ) { }

  ngOnInit() {
    // setInterval( ()=> {
    //   this.hours = new Date().getHours();
    //   this.minutes = new Date().getMinutes();
    //   this.seconds = new Date().getSeconds();
    // }, 1000); 
  }
 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}




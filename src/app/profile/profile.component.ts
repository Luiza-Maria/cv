import { Component, OnInit } from '@angular/core';
declare var $: any;
import { InformationService } from '../information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  detail = [];
  
  constructor( private _infoService: InformationService) { }

  ngOnInit() {
    this._infoService.getInfo()
      .subscribe(data => this.detail = data); 
  }
 
  
}
// $(document).ready(function () {
//   $(".modal").click(function() {
//     var animation = $(this).attr("data-animation");
//     $(this).addClass(animation).delay(1000).queue(function(next) {
//       $(this).removeClass(animation);
//       next();
//     });
//   });
// })

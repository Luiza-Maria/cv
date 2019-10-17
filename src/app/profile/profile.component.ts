import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  detail = [];
  moreJobs: boolean = false;
  moreInternships: boolean = false;

  
  id:number = 2;
  year: string;
  name: string;

  
  constructor( private _infoService: InformationService) { }

  ngOnInit() {
    this._infoService.getInfo()
      .subscribe(data => this.detail = data); 
  }
 
  seeMoreJobs() {
    this.moreJobs = true;

  }

  seeMoreInternships() {
    this.moreInternships = true;
  }
}


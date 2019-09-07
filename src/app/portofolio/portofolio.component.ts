import { Component, OnInit } from '@angular/core';
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
} from '../anime';
import { $ } from 'protractor';
// declare var $: any;
import { InformationService } from '../information.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})

export class PortofolioComponent implements OnInit {
  detail = [];

  constructor( private _infoService: InformationService) { }

  ngOnInit() {
    this._infoService.getInfo()
      .subscribe(data => this.detail = data); 
  }

}


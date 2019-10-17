import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
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


@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})

export class PortofolioComponent implements OnInit {
  detail;
  sourceMap = "";
  sourceOsf = "";
  sourceBlog = "";
  index1: number = 0;
  index2: number = 0;
  index3: number = 0;
  changeContent1: boolean = true;
  changeContent2: boolean = true;
  changeContent3: boolean = true;

  constructor(private _infoService: InformationService) { }

  ngOnInit() {
    this._infoService.getInfo()
      .subscribe(data => {
        this.detail = data;
        this.sourceMap = this.detail[0].image.maps[this.index1];
        this.sourceOsf = this.detail[0].image.osf[this.index2];
        this.sourceBlog = this.detail[0].image.blog[this.index3];
      });   
  }
  // 1st card
  nextImage1() {
    this.index1++;
    if (this.index1 > this.detail[0].image.maps.length - 1) {
      this.index1 = 0;
    }
    this.sourceMap = this.detail[0].image.maps[this.index1];   
  }
  showDetails1() {
    this.changeContent1 = false;

  }
  hideDetails1() {
    this.changeContent1 = true;
  }

    // 2nd card
  nextImage2() {
    this.index2++;
    if (this.index2 > this.detail[0].image.osf.length-1) {
      this.index2 = 0; 
    }
    this.sourceOsf = this.detail[0].image.osf[this.index2]; 
  }

  showDetails2() {
    this.changeContent2 = false;
  }
  hideDetails2() {
    this.changeContent2 = true;
  }

  // 3rd card
  nextImage3() {
    this.index3++;
    if (this.index3 > this.detail[0].image.blog.length-1) {
      this.index3 = 0;   
    }   
    this.sourceBlog = this.detail[0].image.blog[this.index3];
  }
  showDetails3() {
    this.changeContent3 = false;
  }
  hideDetails3() {
    this.changeContent3 = true;
  }
}


  






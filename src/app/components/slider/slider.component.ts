import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImgSliderService } from '../../services/services.index';

import { SliderInterface } from './slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SliderComponent implements OnInit {

  sliderArray: object[];
  transform: number;
  selectedIndex = 0;

  constructor(private _imgSliderService: ImgSliderService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {

    this._imgSliderService.getDataImages().toPromise()
      .then((data) => {
        this.sliderArray = [data];
      })

  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }

}

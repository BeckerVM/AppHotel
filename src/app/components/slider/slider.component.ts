import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImgSliderService } from '../../services/services.index';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  transform: number;
  selectedIndex = 0;

  slides: any = [];

  constructor(private _imgSliderService: ImgSliderService) {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {

    this._imgSliderService.getDataImages().toPromise()
      .then((data) => {
        for (let element in data) {
          this.slides.push(data[element]);
        }
      })

  }


  selected(x) {
    console.log(x);
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

import { Component, OnInit } from '@angular/core';

import { ImgSliderService } from '../../services/services.index';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any = [];
  config = {
    width: "100%", //width of slides defaults to 800px
    height: "300px", //height of slides defaults to 300px
    autoPlay: true,//autoplay required or not defaults to false
    delay: 5000 // delay for autoplay
  };
  constructor(private _imgSliderService: ImgSliderService) { }

  ngOnInit() {
    this._imgSliderService.getDataImages().toPromise()
      .then((data) => {
        for (let element in data) {
          this.slides.push({
            image: data[element]['img'], //path to image
            title: data[element]['text'] //caption for image
          });
        }
      })
  }

}

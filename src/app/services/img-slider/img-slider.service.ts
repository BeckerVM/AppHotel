import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = '../../../assets/data/imgDataSlider.json';

@Injectable({
  providedIn: 'root'
})
export class ImgSliderService {

  constructor(private _http: HttpClient) { }

  getDataImages() {
    return this._http.get(URL);
  }
}

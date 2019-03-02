import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all services from services.index.ts
import {
  ImgSliderService
} from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ImgSliderService
  ]
})
export class ServicesModule { }

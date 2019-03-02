import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { SliderComponent } from './slider/slider.component';
import { NgxSlidesModule } from 'ngx-slides';

@NgModule({
  declarations: [
    BulletinComponent,
    DestinationsComponent,
    SliderComponent
  ],
  imports: [
    NgxSlidesModule,
    CommonModule

  ],
  exports: [
    BulletinComponent,
    DestinationsComponent,
    SliderComponent
  ]
})
export class ComponentsModule {
  constructor() {
  }
}

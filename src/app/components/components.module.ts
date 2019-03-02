import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    BulletinComponent,
    DestinationsComponent,
    SliderComponent
  ],
  imports: [
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { SliderComponent } from './slider/slider.component';
import { NgxSlidesModule } from 'ngx-slides';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    BulletinComponent,
    DestinationsComponent,
    SliderComponent,
    OfferComponent
  ],
  imports: [
    NgxSlidesModule,
    CommonModule

  ],
  exports: [
    BulletinComponent,
    DestinationsComponent,
    SliderComponent,
    OfferComponent
  ]
})
export class ComponentsModule {
  constructor() {
  }
}

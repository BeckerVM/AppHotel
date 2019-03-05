import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { SliderComponent } from './slider/slider.component';
import { NgxSlidesModule } from 'ngx-slides';
import { OfferComponent } from './offer/offer.component';
import { ListOptionsComponent } from './list-options/list-options.component';

@NgModule({
  declarations: [
    BulletinComponent,
    SliderComponent,
    OfferComponent,
    ListOptionsComponent
  ],
  imports: [
    NgxSlidesModule,
    CommonModule

  ],
  exports: [
    BulletinComponent,
    SliderComponent,
    OfferComponent,
    ListOptionsComponent
  ]
})
export class ComponentsModule {
  constructor() {
  }
}

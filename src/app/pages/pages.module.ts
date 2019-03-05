import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSlidesModule } from 'ngx-slides';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { OurHotelsComponent } from './our-hotels/our-hotels.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotPageFoundComponent,
    PromotionsComponent,
    OurHotelsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSlidesModule
  ],
  exports: [
    HomeComponent,
    NotPageFoundComponent,
    PromotionsComponent,
    OurHotelsComponent
  ]
})
export class PagesModule { }

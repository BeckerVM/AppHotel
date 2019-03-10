import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

import { NgxSlidesModule } from 'ngx-slides';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { OurHotelsComponent } from './our-hotels/our-hotels.component';

@NgModule({
  declarations: [
    HomeComponent,
    PromotionsComponent,
    OurHotelsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSlidesModule,
    PAGES_ROUTES
  ],
  exports: [
  ]
})
export class PagesModule { }

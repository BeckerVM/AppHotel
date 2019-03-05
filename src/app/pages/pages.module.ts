import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSlidesModule } from 'ngx-slides';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotPageFoundComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSlidesModule
  ],
  exports: [
    HomeComponent,
    NotPageFoundComponent,
    PromotionsComponent
  ]
})
export class PagesModule { }

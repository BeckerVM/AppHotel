import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSlidesModule } from 'ngx-slides';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotPageFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSlidesModule
  ],
  exports: [
    HomeComponent,
    NotPageFoundComponent
  ]
})
export class PagesModule { }

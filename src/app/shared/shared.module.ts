import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BannerComponent
  ]
})
export class SharedModule { }

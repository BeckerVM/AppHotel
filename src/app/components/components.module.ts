import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    BulletinComponent,
    DestinationsComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    BulletinComponent,
    DestinationsComponent
  ]
})
export class ComponentsModule { }

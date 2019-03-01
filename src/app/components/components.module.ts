import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';

@NgModule({
  declarations: [
    BulletinComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    BulletinComponent
  ]
})
export class ComponentsModule { }

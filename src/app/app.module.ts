import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ServicesModule } from './services/services.module';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    ServicesModule,
    SharedModule,
    ComponentsModule,
    PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}

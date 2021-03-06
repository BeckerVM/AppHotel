import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ServicesModule } from './services/services.module';

import { ComponentsModule } from './components/components.module';

import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { AuthPagesComponent } from './auth-pages/auth-pages.component';
import { AuthComponentsModule } from './auth-components/auth-components.module';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthPagesComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    ServicesModule,
    SharedModule,
    ComponentsModule,
    AuthComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}

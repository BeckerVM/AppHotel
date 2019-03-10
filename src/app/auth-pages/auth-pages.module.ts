import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AUTH_PAGES_ROUTES } from './auth-pages.routes';
import { AuthComponentsModule } from '../auth-components/auth-components.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AUTH_PAGES_ROUTES,
    AuthComponentsModule
  ]
})
export class AuthPagesModule { }

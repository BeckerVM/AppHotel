import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { PromotionsComponent } from './pages/promotions/promotions.component'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: '**', component: NotPageFoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
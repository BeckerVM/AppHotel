import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { AuthPagesComponent } from './auth-pages/auth-pages.component';


const appRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'auth-pages',
    component: AuthPagesComponent,
    loadChildren: './auth-pages/auth-pages.module#AuthPagesModule'
  },

  // { path: 'home', component: HomeComponent },
  // { path: 'promotions', component: PromotionsComponent },
  // { path: 'our-hotels', component: OurHotelsComponent },
  { path: '**', component: NotPageFoundComponent }

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
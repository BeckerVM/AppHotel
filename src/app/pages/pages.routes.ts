import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { OurHotelsComponent } from './our-hotels/our-hotels.component';


const pagesRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      data: { titulo: 'Home' }
    },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'our-hotels', component: OurHotelsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
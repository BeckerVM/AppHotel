import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';


const pagesRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { titulo: 'Home' }
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    }
];


export const AUTH_PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
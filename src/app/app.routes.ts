import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceComponent } from './components/service/service.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'services/:clasificacion', component: ServicesComponent },
    { path: 'service/:id', component: ServiceComponent },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

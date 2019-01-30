import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceComponent } from './components/service/service.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'services/:clasificacion', component: ServicesComponent },
    { path: 'service/:id', component: ServiceComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PagenotfoundComponent },
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

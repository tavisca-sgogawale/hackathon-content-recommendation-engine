import { Routes } from '@angular/router';
import { TravelComponent } from '../components/travel/travel.component';
import { DemoComponent } from '../components/demo/demo.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    { path: 'travel', component: TravelComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

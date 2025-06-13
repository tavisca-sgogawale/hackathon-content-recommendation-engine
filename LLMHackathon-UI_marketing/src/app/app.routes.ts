import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home-component';
import { ListComponent } from '../components/list/list-component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

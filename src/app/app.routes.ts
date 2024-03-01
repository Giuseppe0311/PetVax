import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PruebaComponent } from './components/prueba/prueba.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path:'dashboard', component:DashboardComponent},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ThankyouPageComponent } from './pages/thankyou-page/thankyou-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', }
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'done', component: ThankyouPageComponent },
    { path: '**', component: ErrorPageComponent }
];

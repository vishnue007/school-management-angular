import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { MainLayout as MainLayoutComponent } from './layout/main-layout/main-layout';
import { AuthLayout as AuthLayoutComponent } from './layout/auth-layout/auth-layout';

export const routes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: Home },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
];

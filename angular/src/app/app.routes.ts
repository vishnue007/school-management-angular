import { Routes } from '@angular/router';
import { MainLayout as MainLayoutComponent } from './layout/main-layout/main-layout';
import { AuthLayout as AuthLayoutComponent } from './layout/auth-layout/auth-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';

export const routes: Routes = [
  // Main layout
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./pages/routes/main.routes').then(m => m.MAIN_ROUTES),
  },

  // Auth layout
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/routes/auth.routes').then(m => m.AUTH_ROUTES),
  },

  // Admin layout
  {
    path: '',
    component: AdminLayout,
    loadChildren: () =>
      import('./pages/routes/admin.routes').then(m => m.ADMIN_ROUTES),
  },
];

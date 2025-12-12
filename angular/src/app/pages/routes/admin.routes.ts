import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('../dashboard/dashboard').then((m) => m.Dashboard),
  },

  {
    path: 'students',
    loadChildren: () => import('../students/student.routes').then((m) => m.STUDENT_ROUTES),
  },
  {
    path: 'staffs',
    loadChildren: () => import('../staffs/staffs.routes').then((m) => m.STAFFS_ROUTES),
  },
];

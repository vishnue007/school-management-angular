import { Routes } from '@angular/router';

export const STAFFS_ROUTES: Routes = [
  {
    path: 'add',
    loadComponent: () =>
      import('./add-staffs/add-staffs').then(m => m.AddStaffs),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./staffs-list/staffs-list').then(m => m.StaffsList),
  }
];

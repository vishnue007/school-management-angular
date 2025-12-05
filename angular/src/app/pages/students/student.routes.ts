import { Routes } from '@angular/router';

export const STUDENT_ROUTES: Routes = [
  {
    path: 'add',
    loadComponent: () =>
      import('./add-students/add-students').then(m => m.AddStudents),
  },
//   {
//     path: 'list',
//     loadComponent: () =>
//       import('./student-list/student-list').then(m => m.StudentList),
//   }
];

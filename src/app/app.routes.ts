import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', loadChildren: () => import('./features/students/students.routes').then(m => m.STUDENTS_ROUTES) },
    { path: '**', redirectTo: 'students' }
];

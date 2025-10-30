import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', loadChildren: () => import('./features/students/students.routes').then(m => m.STUDENTS_ROUTES) },
    { path: '**', redirectTo: 'overview' }
];

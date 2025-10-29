import { Routes } from '@angular/router';
import { StudentOverviewComponent } from './pages/student-overview/student-overview.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';

export const STUDENTS_ROUTES: Routes = [
  { path: '', component: StudentOverviewComponent },
  { path: 'add', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent }
];

import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


import { StudentService } from '../../../../core/services/student.service';
import { Student } from '../../../../core/models/student.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-student-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, ButtonModule, PaginatorModule, DialogModule],
  templateUrl: './student-overview.component.html',
  styleUrl: './student-overview.component.css'
})
export class StudentOverviewComponent {

  private studentService = inject(StudentService);
  private router = inject(Router);

  firstPage = signal(0);
  rows = 20;
  students = this.studentService.students;

  paginatedStudents = computed(() => {
    const start = this.firstPage();
    const end = start + this.rows;
    return this.students().slice(start, end);
  });

  onPageChange(event: any) {
    this.firstPage.set(event.first);
  }

  deleteStudent(id: number) {
    if(confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id);
    }
  }

  editStudent(id: number) {
    this.router.navigate(['/overview/edit', id]);
  }

  addStudent() {
    this.router.navigate(['/overview/add']);
  }

  selectedStudent = signal<Student | null>(null);
  dialogVisible = signal<boolean>(false);

  showStudentDetails(student: Student) {
    this.selectedStudent.set(student);
    this.dialogVisible.set(true);
  }

  hideDetails() {
    this.selectedStudent.set(null);
    this.dialogVisible.set(false);
  }


}

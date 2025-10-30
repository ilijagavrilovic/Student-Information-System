import { Component , inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { Student } from '../../../../core/models/student.model';
import { StudentService } from '../../../../core/services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, RouterModule, InputTextModule, ButtonModule, DropdownModule, CalendarModule, FormsModule, TagModule, ChipModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  private studentService = inject(StudentService);
  private router = inject(Router)
  private route = inject(ActivatedRoute);

  currentStudent: number | null = null;
  student = signal<Student>({ id: 0, firstName: '', lastName: '', email: '', courses: [] });

  constructor() {
    const idInsideLink = this.route.snapshot.paramMap.get('id');
    if (idInsideLink) {
      this.currentStudent = +idInsideLink;
      const studentExists = this.studentService.getStudentById(this.currentStudent);
      if (studentExists) {
        this.student.set(studentExists);
      }
    }
  }

  courseInput = signal<string>('');

  addCourse() {
    const inputValue = this.courseInput().trim();

    if (inputValue && !this.student().courses.includes(inputValue)){
      this.student.update(s => ({...s, courses: [ ...s.courses, inputValue ]}));
      this.courseInput.set('');
    }
  }

  removeCourse(course: string) {
    this.student.update(s => ({...s, courses: s.courses.filter(c => c !== course)}));
  }

  save() {
    const s = this.student();

    if ( !s.firstName || !s.lastName || !s.email ) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(s.email)) {
      alert('Please enter a valid email address. Should be in format name@example.com');
      return;
    }

    if (this.currentStudent){
      this.studentService.updateStudent(this.currentStudent, s);
    }
    else {
      this.studentService.addStudent(s);
    }

    this.router.navigate(['/students']);
  }

  cancel() {
    this.router.navigate(['/students']);
  }

}


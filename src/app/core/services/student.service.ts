import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentsSignal = signal<Student[]>([
    { id: 1, firstName: 'Ilija', lastName: 'Gavrilovic', email: 'ilija@example.com', courses: ['Mathematics', 'Physics'] },
    { id: 2, firstName: 'Gruja', lastName: 'Grujic', email: 'grujica@example.com', courses: ['Programming', 'Biologica'] },
    { id: 3, firstName: 'Nikola', lastName: 'Nikolic', email: 'nikolica@example.com', courses: ['Programming', 'Chemistry'] },
    { id: 4, firstName: 'Pera', lastName: 'Peric', email: 'pera@example.com', courses: ['Mathematics', 'Biologica'] },
    { id: 5, firstName: 'Mika', lastName: 'Mikic', email: 'mika@example.com', courses: ['Physics', 'Chemistry'] }
    ]);

    students = this.studentsSignal.asReadonly();

    addStudent(student: Student) {
        const newStudent = { ...student, id: this.generateId() };
        this.studentsSignal.update(students => [...students, newStudent]);
    }

    updateStudent(id: number, updated: Partial<Student>) {
        this.studentsSignal.update(students => students.map(s => (s.id === id ? { ...s, ...updated } : s))
        );
    }

    deleteStudent(id: number) {
        this.studentsSignal.update(students => students.filter(s => s.id !== id));
    }

    private generateId(): number {
        const students = this.studentsSignal();
        return students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    }

    getStudentById(id: number): Student | undefined {
        return this.studentsSignal().find(s => s.id === id);
    }

}
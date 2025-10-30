import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentsSignal = signal<Student[]>([
    { id: 1, firstName: 'Ilija', lastName: 'Gavrilovic', email: 'ilija@example.com', courses: ['Mathematics', 'Physics'] },
    { id: 2, firstName: 'Gruja', lastName: 'Grujic', email: 'grujica@example.com', courses: ['Programming', 'Biologica'] },
    { id: 3, firstName: 'Nikola', lastName: 'Nikolic', email: 'nikolica@example.com', courses: ['Programming', 'Chemistry'] },
    { id: 4, firstName: 'Pera', lastName: 'Peric', email: 'pera@example.com', courses: ['Mathematics', 'Biologica'] },
    { id: 5, firstName: 'Mika', lastName: 'Mikic', email: 'mika@example.com', courses: ['Physics', 'Chemistry'] },
    { id: 6, firstName: 'Zika', lastName: 'Zikic', email: 'zika@example.com', courses: ['Mathematics', 'Programming'] },
    { id: 7, firstName: 'Laza', lastName: 'Lazic', email: 'laza@example.com', courses: ['Biologica', 'Chemistry'] },
    { id: 8, firstName: 'Ana', lastName: 'Markovic', email: 'ana.markovic@example.com', courses: ['Economics', 'Statistics', 'Sociology'] },
    { id: 9, firstName: 'Marko', lastName: 'Petrov', email: 'marko.petrov@example.com', courses: ['Data Science', 'Algorithms'] },
    { id: 10, firstName: 'Jelena', lastName: 'Stefanovic', email: 'jelena.stefanovic@example.com', courses: ['English Literature', 'History', 'Philosophy'] },
    { id: 11, firstName: 'Vuk', lastName: 'Dragovic', email: 'vuk.dragovic@example.com', courses: ['Computer Networks', 'Security', 'Programming'] },
    { id: 12, firstName: 'Maja', lastName: 'Popadic', email: 'maja.popadic@example.com', courses: ['Design', 'Art History'] },
    { id: 13, firstName: 'Ivan', lastName: 'Milosevic', email: 'ivan.milosevic@example.com', courses: ['Mathematics', 'Statistics', 'Physics'] },
    { id: 14, firstName: 'Sara', lastName: 'Kovac', email: 'sara.kovac@example.com', courses: ['Biology', 'Chemistry', 'Environmental Science'] },
    { id: 15, firstName: 'Nemanja', lastName: 'Ristic', email: 'nemanja.ristic@example.com', courses: ['Astronomy', 'Physics'] },
    { id: 16, firstName: 'Tanja', lastName: 'Ilic', email: 'tanja.ilic@example.com', courses: ['Psychology', 'Sociology', 'Philosophy'] },
    { id: 17, firstName: 'Boris', lastName: 'Zivkovic', email: 'boris.zivkovic@example.com', courses: ['Programming', 'Data Science', 'Algorithms', 'Databases'] },
    { id: 18, firstName: 'Olga', lastName: 'Bakovic', email: 'olga.bakovic@example.com', courses: ['Economics', 'Management'] },
    { id: 19, firstName: 'Petar', lastName: 'Jovic', email: 'petar.jovic@example.com', courses: ['Physics', 'Astronomy', 'Mathematics'] },
    { id: 20, firstName: 'Milica', lastName: 'Vukovic', email: 'milica.vukovic@example.com', courses: ['Design', 'Photography'] },
    { id: 21, firstName: 'Andrej', lastName: 'Savic', email: 'andrej.savic@example.com', courses: ['Programming', 'Artificial Intelligence'] },
    { id: 22, firstName: 'Natalija', lastName: 'Tomic', email: 'natalija.tomic@example.com', courses: ['Sociology', 'Philosophy'] },
    { id: 23, firstName: 'Dusan', lastName: 'Stankovic', email: 'dusan.stankovic@example.com', courses: ['Algorithms', 'Data Science'] },
    { id: 24, firstName: 'Jovana', lastName: 'Kovacevic', email: 'jovana.kovacevic@example.com', courses: ['Psychology', 'Biology'] },
    { id: 25, firstName: 'Nikolina', lastName: 'Radovic', email: 'nikolina.radovic@example.com', courses: ['Art History', 'Design', 'Marketing'] },
    { id: 26, firstName: 'Milos', lastName: 'Ilic', email: 'milos.ilic@example.com', courses: ['Computer Networks', 'Security'] },
    { id: 27, firstName: 'Filip', lastName: 'Vesic', email: 'filip.vesic@example.com', courses: ['Programming', 'Physics'] },
    { id: 28, firstName: 'Katarina', lastName: 'Petrovic', email: 'katarina.petrovic@example.com', courses: ['Statistics', 'Economics'] },
    { id: 29, firstName: 'Luka', lastName: 'Marinkovic', email: 'luka.marinkovic@example.com', courses: ['Machine Learning', 'Artificial Intelligence', 'Data Science'] },
    { id: 30, firstName: 'Teodora', lastName: 'Vasic', email: 'teodora.vasic@example.com', courses: ['Philosophy', 'Sociology', 'Psychology'] },
    { id: 31, firstName: 'Stefan', lastName: 'Bogdanovic', email: 'stefan.bogdanovic@example.com', courses: ['Programming', 'Databases'] },
    { id: 32, firstName: 'Iva', lastName: 'Radenovic', email: 'iva.radenovic@example.com', courses: ['Marketing', 'Economics', 'Management'] },
    { id: 33, firstName: 'Aleksa', lastName: 'Milic', email: 'aleksa.milic@example.com', courses: ['Physics', 'Chemistry', 'Mathematics'] },
    { id: 34, firstName: 'Tamara', lastName: 'Petrovic', email: 'tamara.petrovic@example.com', courses: ['History', 'Art History'] },
    { id: 35, firstName: 'Ognjen', lastName: 'Popovic', email: 'ognjen.popovic@example.com', courses: ['Programming', 'Cybersecurity'] },
    { id: 36, firstName: 'Mina', lastName: 'Jankovic', email: 'mina.jankovic@example.com', courses: ['Design', 'Illustration', 'Photography'] },
    { id: 37, firstName: 'Uros', lastName: 'Simic', email: 'uros.simic@example.com', courses: ['Mathematics', 'Statistics'] },
    { id: 38, firstName: 'Tijana', lastName: 'Ristic', email: 'tijana.ristic@example.com', courses: ['Psychology', 'Philosophy', 'Sociology'] }
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
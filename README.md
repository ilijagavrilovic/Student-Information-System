# 🧑‍🎓 Student Information System

This project is a simple student information system built with the latest **Angular** and **PrimeNG**.  
It allows users to manage student data through user-friendly interface, implementing all the requested features from the assignment.


## 🚀 Features

- **Add a new student** (basic info + course selection)  
- **Edit student information** (courses only)  
- **Delete a student**  
- **Overview page** with a table displaying all students  
  - Pagination (20 students per page)  
  - Sorting by name and surname 
  - Modal popup with full student details 
- **Dark mode toggle** 
- Responsive layout with PrimeNG components


## 🧩 Technologies Used

- **Angular** (latest version)  
- **PrimeNG** (UI components and icons)  
- **PrimeIcons**  
- **TypeScript**  
- **HTML / CSS** (custom styles for table and layout)




## 💤 Lazy Loading

The `/overview` route (student overview page) is **lazily loaded** via Angular’s route configuration:

```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadChildren: () => import('./features/students/students.routes').then(m => m.STUDENTS_ROUTES) },
  { path: '**', redirectTo: 'overview' }
];
```
This ensures the student-related code is only downloaded when the user navigates to the overview page.

## ⚙️ Setup & Run (local)

### 1. Clone repository
```bash
git clone https://github.com/ilijagavrilovic/Student-Information-System.git
cd student-info-system
```

### 2. Instal dependencies
```
npm install
```

### 3. Run it

```
ng serve
```

### 4. Open in browser
Open app in your browser at: http://localhost:4200

## 🧾 Notes
The project simulates clean project structure. It also show usage of Angular standalone components and Signals for state.

I used PrimeNG components for consistent UI, and lazy loading for keeping initial bundle small.

## 🧠 Author

**Ilija Gavrilović**  
📍 *Ljubljana, Slovenia*  
💼 *Front-End Developer & UX/UI Designer*  
📧 [ilijagavrilovic03@gmail.com](mailto:ilijagavrilovic03@gmail.com)





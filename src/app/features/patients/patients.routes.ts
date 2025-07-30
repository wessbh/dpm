import { Routes } from '@angular/router';

export const PATIENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./patients-list/patients-list.component').then(m => m.PatientsListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./patient-form/patient-form.component').then(m => m.PatientFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./patient-detail/patient-detail.component').then(m => m.PatientDetailComponent)
  }
];
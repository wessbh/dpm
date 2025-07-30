import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients', loadComponent: () => import('./components/patients/patients.component').then(m => m.PatientsComponent) },
  { path: 'appointments', loadComponent: () => import('./components/appointments/appointments.component').then(m => m.AppointmentsComponent) },
  { path: 'medical-records', loadComponent: () => import('./components/medical-records/medical-records.component').then(m => m.MedicalRecordsComponent) },
  { path: 'messages', loadComponent: () => import('./components/messages/messages.component').then(m => m.MessagesComponent) },
  { path: 'settings', loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent) },
  { path: '**', redirectTo: '/dashboard' }
];
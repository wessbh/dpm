import { Routes } from '@angular/router';

export const MEDICAL_RECORDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../../shared/components/placeholder.component').then(m => m.PlaceholderComponent)
  }
];
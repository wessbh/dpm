import { Routes } from '@angular/router';

export const COMMUNICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../../shared/components/placeholder.component').then(m => m.PlaceholderComponent)
  }
];
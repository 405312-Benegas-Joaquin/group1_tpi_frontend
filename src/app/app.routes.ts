import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component'),
    children: [
      {
        path: 'constructions',
        loadComponent: () => import('./components/construction/construction.component'),
      },
      {
        path: 'fines',
        loadComponent: () => import('./components/fine/fine.component'),
      },
      {
        path: '',
        redirectTo: 'fines',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'fines',
      }
    ]
  },
];

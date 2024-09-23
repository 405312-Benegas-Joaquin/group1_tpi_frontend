import { Routes } from '@angular/router';
import { FineDetailComponent } from './components/fine-detail/fine-detail.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component'),
    children: [
      {
        path: 'constructions',
        loadComponent: () =>
          import('./components/construction/construction.component'),
      },
      {
        path: 'fines',
        loadComponent: () => import('./components/fine/fine.component'),
      },
      { path: 'fine/:id', component: FineDetailComponent },

      {
        path: '',
        redirectTo: 'fines',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'fines',
      },
    ],
  },
];

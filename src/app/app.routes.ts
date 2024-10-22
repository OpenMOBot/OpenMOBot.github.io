import { Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [
  { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: '' }  // Redirect invalid paths
];

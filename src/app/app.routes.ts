import { Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { StepsPageComponent } from './steps-page/steps-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: 'review', component: ReviewComponent },
  { path: 'steps', component: StepsPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }  // Redirect invalid paths
];

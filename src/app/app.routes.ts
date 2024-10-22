import { Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { BuildPageComponent } from './build-page/build-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';

export const routes: Routes = [
  { path: 'review', component: ReviewComponent },
  { path: 'build', component: BuildPageComponent },
  { path: 'program', component: ProgramPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }  // Redirect invalid paths
];

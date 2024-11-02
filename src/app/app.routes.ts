import { Routes } from '@angular/router';
import { BuildPageComponent } from './build-page/build-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: 'build', component: BuildPageComponent },
  { path: 'program', component: ProgramPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }  // Redirect invalid paths
];

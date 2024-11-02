import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepComponent } from './step/step.component';
import { BuildPageComponent } from './build-page/build-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './about-page/about-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    StepComponent,
    BuildPageComponent,
    ProgramPageComponent,
    AboutPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Changed styleUrl to styleUrls (correct spelling)
})
export class AppComponent {}

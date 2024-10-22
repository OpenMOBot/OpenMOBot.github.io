import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { StepComponent } from './step/step.component';
import { BuildPageComponent } from './build-page/build-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepComponent, ReviewComponent, BuildPageComponent, ProgramPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

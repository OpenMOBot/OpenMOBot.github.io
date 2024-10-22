import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { StepComponent } from './step/step.component';
import { StepsPageComponent } from './steps-page/steps-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepComponent, ReviewComponent, StepsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step9Component } from './step9/step9.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Step1Component, Step2Component, Step9Component, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
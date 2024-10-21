import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Step1Component, Step2Component, Step3Component, Step4Component, Step5Component, Step6Component, Step7Component, Step8Component, Step9Component, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
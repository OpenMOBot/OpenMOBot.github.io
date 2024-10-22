import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'steps-page',
  standalone: true,
  imports: [StepComponent, ReviewComponent],
  templateUrl: './steps-page.component.html',
  styleUrl: './steps-page.component.scss',
})
export class StepsPageComponent {
  steps = [
    {
      content: 'Test1---------',
      gifPath: '/assets/gifs/bubu-dudu.gif',
      title: 'Testtttttретт',
    },
    {
      content: 'Test1',
      gifPath: '/assets/gifs/bubu-dudu.gif',
      title: 'Testttttt',
    },
    {
      content: 'Test2',
      gifPath: 'test',
      title: 'Testttttt',
    },
    {
      content: 'Test3',
      gifPath: 'test',
      title: 'Testttttt',
    },
  ];

  scrollTo(stepId: number) {
    let element;
    if (stepId >= this.steps.length) {
      element = 'review';
    } else {
      element = `step${stepId}`;
    }
    document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
  }
}

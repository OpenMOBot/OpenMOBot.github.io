import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { ReviewComponent } from '../review/review.component';


@Component({
  selector: 'program-page',
  standalone: true,
  imports: [StepComponent, ReviewComponent],
  templateUrl: './program-page.component.html',
  styleUrl: './program-page.component.css'
})
export class ProgramPageComponent {
  steps = [
    {
      content: 'Visit https://www.arduino.cc/en/software to download the latest version of the Arduino IDE. Follow the installation instructions provided on the website. Once the installation is complete, proceed to the next step.',
      gifPath: '/assets/images/Arduino_Logo.svg.png',
      title: 'Install Arduino',
    },
    {
      content: 'Test1',
      gifPath: '/assets/gifs/step2.gif',
      title: 'Testttttt',
    },
    {
      content: 'Test2',
      gifPath: '/assets/gifs/step3.gif',
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

import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'build-page',
  standalone: true,
  imports: [StepComponent, ReviewComponent],
  templateUrl: './build-page.component.html',
  styleUrl: './build-page.component.scss',
})
export class BuildPageComponent {
  steps = [
    {
      content: 'Take the A-S and A-L packages. In the A-S package, you\'ll find the bolts needed to assemble the mount, while the A-L package contains the 3D-printed parts for the assembly. Refer to the accompanying GIF for step-by-step guidance, and if you have any questions, feel free to reach out to the team for assistance ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа',
      gifPath: '/assets/gifs/02-caster-wheel-attach.mp4',
      videoPath: '/assets/gifs/02-caster-wheel-attach.mp4',
      title: 'Assemble the sensor mounting part'
    },
    {
      content: 'Test1',
      gifPath: '/assets/gifs/chassis.gif',
      videoPath: '/assets/gifs/01-chassis.mp4',
      title: 'Testttttt',
    },
    {
      content: 'Test2',
      gifPath: '/assets/gifs/chassis.gif',
      title: 'Testttttt',
      videoPath: '',
    },
    {
      content: 'Test3',
      gifPath: 'test',
      title: 'Testttttt',
      videoPath: '',

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

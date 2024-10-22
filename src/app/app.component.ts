import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepComponent, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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

  scrollTo(stepId?: number) {
    const element = stepId || stepId === 0 ? `step${stepId}` : 'start';
    document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
  }
}

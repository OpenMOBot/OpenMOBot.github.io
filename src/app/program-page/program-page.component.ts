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
      title: 'Install Arduino',
      content: 'Visit https://www.arduino.cc/en/software to download the latest version of the Arduino IDE. Follow the installation instructions provided on the website. Once the installation is complete, proceed to the next step.',
      gifPath: '/assets/images/Arduino_Logo.svg.png',
    },
    {
      title: 'Download the library',
      content: 'Affter installing the Arduino IDE it is time to install the library. First download https://github.com/OpenMOBot/OpenMOBot/archive/refs/heads/main.zip.',
      gifPath: '/assets/images/path.png',
      
    },
    {
      title: 'Install the library',
      content: 'In Documents create folder Arduino and then inside create folder named libraries. Please unzip the downloaded file inside the libraries folder.',
      gifPath: '/assets/gifs/step1.gif',
    },
    {
      title: 'Download the dependancy library',
      content: 'In libraries folder download nad unzip the the following libray: https://github.com/orlin369/FxTimer/archive/refs/heads/main.zip',
      gifPath: '/assets/gifs/step2.gif',
    },
    {
      title: 'Test',
      content: 'It is time to test the LED of the robot.',
      gifPath: '/assets/gifs/step3.gif',
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

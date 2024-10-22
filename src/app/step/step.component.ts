import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  title: string;
  content: string;
  gifPath: string;
}

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
})
export class StepComponent {
  @Input() index: number = 0;
  @Input() step: Step = {
    title: '',
    content: '',
    gifPath: '',
  };
}

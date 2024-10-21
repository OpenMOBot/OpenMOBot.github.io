import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule if using *ngFor, *ngIf, etc.


@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'

})
export class Step1Component {

}

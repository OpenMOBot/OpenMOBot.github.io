import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule if using *ngFor, *ngIf, etc.

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}

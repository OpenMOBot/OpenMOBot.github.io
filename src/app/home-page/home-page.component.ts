import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuildPageComponent } from '../build-page/build-page.component';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}

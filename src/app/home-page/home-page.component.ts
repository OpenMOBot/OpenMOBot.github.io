import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepsPageComponent } from '../steps-page/steps-page.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) {}
  // steps = [
  //   {
  //     content: 'Test1---------',
  //     gifPath: '/assets/gifs/bubu-dudu.gif',
  //     title: 'Testtttttретт',
  //   },
  //   {
  //     content: 'Test1',
  //     gifPath: '/assets/gifs/bubu-dudu.gif',
  //     title: 'Testttttt',
  //   },
  //   {
  //     content: 'Test2',
  //     gifPath: 'test',
  //     title: 'Testttttt',
  //   },
  //   {
  //     content: 'Test3',
  //     gifPath: 'test',
  //     title: 'Testttttt',
  //   },
  // ];

  navigate(path: string) {
    this.router.navigate([path]);
  }
}

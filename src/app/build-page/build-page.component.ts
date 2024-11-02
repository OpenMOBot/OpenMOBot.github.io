import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'build-page',
  standalone: true,
  imports: [StepComponent],
  templateUrl: './build-page.component.html',
  styleUrl: './build-page.component.scss',
})
export class BuildPageComponent {
  steps = [
    {
      content: 'Begin with the chassis assembly, ensuring all parts are aligned and secured properly. The chassis forms the base structure of the robot, supporting other components and enabling movement.',
      gifPath: '/assets/gifs/chassis.gif',
      videoPath: '/assets/gifs/01-chassis.mp4',
      title: 'Assemble Chassis'
    },
    {
      content: 'Attach the caster wheel to stabilize the robot. This wheel allows smooth movement in all directions, providing balance without impeding maneuverability on different surfaces.',
      gifPath: '/assets/gifs/caster-wheel-attach.gif',
      videoPath: '/assets/gifs/02-caster-wheel-attach.mp4',
      title: 'Attach Caster Wheel'
    },
    {
      content: 'Position and secure the Arduino board. This component acts as the main controller, processing inputs and managing outputs for the robot’s functions, making it central to its operation.',
      gifPath: '/assets/gifs/arduino-attach.gif',
      videoPath: '/assets/gifs/03-arduino-attach.mp4',
      title: 'Attach Arduino'
    },
    {
      content: 'Install the motor driver, connecting it to the Arduino. This driver powers the motors, translating signals from the controller into movement, essential for directional control.',
      gifPath: '/assets/gifs/motor-driver-attach.gif',
      videoPath: '/assets/gifs/04-motor-driver-attach-new.mp4',
      title: 'Attach Motor Driver'
    },
    {
      content: 'Add the battery pack to power the robot. Ensure the battery is securely attached and connected to the components, providing a stable power source for extended operation.',
      gifPath: '/assets/gifs/battery-pack-attach.gif',
      videoPath: '/assets/gifs/05-battery-pack-attach-new-new.mp4',
      title: 'Attach Battery Pack'
    },
    {
      content: 'Attach the left motor, securing it firmly. The motor is essential for driving the robot forward or backward and will work in tandem with the right motor for balanced movement.',
      gifPath: '/assets/gifs/motor-left-attach.gif',
      videoPath: '/assets/gifs/06-motor-left-attach-new.mp4',
      title: 'Attach Left Motor'
    },
    {
      content: 'Attach the right motor, ensuring alignment with the left motor. Together, these motors enable the robot to navigate various directions and maintain stability.',
      gifPath: '/assets/gifs/motor-right-attach.gif',
      videoPath: '/assets/gifs/07-motor-rightt-attach.mp4',
      title: 'Attach Right Motor'
    },
    {
      content: 'Secure the wheels onto the motors. Properly attached wheels ensure the robot can move effectively on various surfaces, providing smooth operation and good traction.',
      gifPath: '/assets/gifs/wheels-attach.gif',
      videoPath: '/assets/gifs/08-wheels-attach.mp4',
      title: 'Attach Wheels'
    },
    {
      content: 'Install the optosensor, aligning it for accurate detection. This sensor helps the robot detect nearby objects or changes in the environment, enhancing navigation capabilities.',
      gifPath: '/assets/gifs/optosensor-attach.gif',
      videoPath: '/assets/gifs/09-optosensor-attach.mp4',
      title: 'Attach Optosensor'
    },
    {
      content: 'Attach the servo motor and ultrasonic sensor. These components work together to detect obstacles, with the servo adjusting the sensor’s position for accurate readings.',
      gifPath: '/assets/gifs/servo-ultrasonic-attach.gif',
      videoPath: '/assets/gifs/10-servo-ultrasonic-attach-new.mp4',
      title: 'Attach Servo and Ultrasonic Sensor'
    },
    {
      content: 'Secure the QTR holder in place. This component supports sensors that detect lines or edges, essential for robots designed to follow paths or navigate specific routes.',
      gifPath: '/assets/gifs/qtr-holder-attach.gif',
      videoPath: '/assets/gifs/11-qtr-holder-attach.mp4',
      title: 'Attach QTR Holder'
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

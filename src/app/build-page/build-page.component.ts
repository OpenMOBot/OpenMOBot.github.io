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
      content: 'Welcome to your robotics journey! This is the chassis of your robot, the foundation where you’ll bring all the components together to bring it to life. Let’s dive in and start assembling—have fun building!',
      gifPath: '/assets/gifs/chassis.gif',
      videoPath: '/assets/gifs/01-chassis.mp4',
      title: 'Assemble Chassis'
    },
    {
      content: 'Let’s begin with the QTR sensor holder. This attachment will be added to the chassis at the end, but we’ll prepare it first. Open package <b>A-L</b> and follow the instructions in the video.',
      gifPath: '/assets/gifs/00-sensor--older.gif',
      videoPath: '',
      title: 'Assemble The QTR Sensor Holder'
    },
    {
      content: 'Start by assembling the caster wheel and attaching it to the chassis. As you assemble the wheel, remember to insert the three bolts inside before closing it. All necessary materials are in package <b>B-L</b>.',
      gifPath: '/assets/gifs/caster-wheel-attach.gif',
      videoPath: '/assets/gifs/02-caster-wheel-attach.mp4',
      title: 'Attach Caster Wheel'
    },
    {
      content: 'Position and secure the Wemos board, ensuring it\'s held in place with only three bolts. Open package <b>C-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/arduino-attach.gif',
      videoPath: '/assets/gifs/03-arduino-attach.mp4',
      title: 'Attach Arduino'
    },
    {
      content: 'Install the motor driver, which powers the motors by converting signals from the controller into movement—essential for controlling the robot. Open package <b>D-L</b> and follow the instructions in the video.',
      gifPath: '/assets/gifs/motor-driver-attach.gif',
      videoPath: '/assets/gifs/04-motor-driver-attach-new.mp4',
      title: 'Attach Motor Driver'
    },
    {
      content: 'Add the battery pack to power the robot. Open package <b>E-L</b> and follow the instructions in the video.',
      gifPath: '/assets/gifs/battery-pack-attach.gif',
      videoPath: '/assets/gifs/05-battery-pack-attach-single.mp4',
      title: 'Attach Battery Pack'
    },
    {
      content: 'Attach the left motor tightly. This motor helps the robot move forward and backward, working together with the right motor for smooth movement. Open package <b>F-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/motor-left-attach.gif',
      videoPath: '/assets/gifs/06-motor-left-attach-new.mp4',
      title: 'Attach Left Motor'
    },
    {
      content: 'Now it’s time to attach the right motor—think of it as the left motor’s dance partner! Together, they’ll help the robot move smoothly. Open package <b>G-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/motor-right-attach.gif',
      videoPath: '/assets/gifs/07-motor-rightt-attach.mp4',
      title: 'Attach Right Motor'
    },
    {
      content: 'Time to secure the wheels onto the motors! Feel free to save this step for last if you like—the wheels aren’t exactly easy to miss!',
      gifPath: '/assets/gifs/wheels-attach.gif',
      videoPath: '/assets/gifs/08-wheels-attach.mp4',
      title: 'Attach Wheels'
    },
    {
      content: 'Install the optical sensor (LM393). Once we program it, this sensor will act like an ABS sensor for our robot, helping us ensure both wheels move at the same speed. Open package <b>H-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/optosensor-attach.gif',
      videoPath: '/assets/gifs/09-optosensor-attach.mp4',
      title: 'Attach Optosensor'
    },
    {
      content: 'Attach the servo motor and ultrasonic sensor. Together, they’ll help the robot detect obstacles, with the servo moving the sensor for precise scanning. Open package <b>I-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/servo-ultrasonic-attach.gif',
      videoPath: '/assets/gifs/10-servo-ultrasonic-attach-new.mp4',
      title: 'Attach Servo and Ultrasonic Sensor'
    },
    {
      content: 'Remember the QTR sensor holder? It’s time to attach it! This part holds sensors that detect lines or edges—perfect for helping the robot follow paths or navigate routes. Open package <b>J-L</b> and follow the video instructions.',
      gifPath: '/assets/gifs/qtr-holder-attach.gif',
      videoPath: '/assets/gifs/11-qtr-holder-attach.mp4',
      title: 'Attach QTR Holder'
    },
    {
      content: 'It might look complicated, but don’t worry—it’s easier than it seems! There’s an example robot on the table, and mentors are always here to help if you need it.',
      gifPath: '/assets/images/OpenMOBot_wiring.png',
      videoPath: '',
      title: 'Wiring'
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

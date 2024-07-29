import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap";
import { TranslateModule } from '@ngx-translate/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {

  public skillSet: string[] = [
    'Angular',
    'Rest-Api',
    'CSS',
    'HTML',
    'Firebase',
    'GIT',
    'JavaScript',
    'TypeScript',
    'Material Design',
    'Scrum',
  ];

  /**
 * Initializes the component and sets up an animation for the element with the ID 'headline-skill' using GSAP.
 * 
 * This method uses GSAP to animate the element with the ID 'headline-skill' when it enters the viewport.
 * The animation is triggered by a scroll event, starting when the top of the element reaches the bottom of the viewport.
 * The element moves 100 pixels along the x-axis from the left and its opacity changes from 0 to 1 over a duration of 1 second.
 * 
 * ScrollTrigger Configuration:
 * - `trigger`: Specifies the element that triggers the animation.
 * - `start`: Defines the start point of the animation when the top of the element reaches the bottom of the viewport.
 * - `toggleActions`: Defines the sequence of actions for the animation.
 * 
 * GSAP Animation Properties:
 * - `x`: The horizontal offset for the animation (-100 pixels).
 * - `opacity`: The starting opacity of the element (0, fully transparent).
 * - `duration`: The duration of the animation (1 second).
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    gsap.from('#headline-skill', {
      scrollTrigger: {
        trigger: '#headline-skill',
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: 1
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap";
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger) 

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})

export class AboutMeSectionComponent {

  /**
 * Initializes the component and sets up an animation for the element with the ID 'work-together'.
 * 
 * @ngOnInit
 * Utilizes GSAP to animate the element with the ID 'work-together'.
 * The animation is triggered by a scroll event, starting when the top of the element
 * reaches the bottom of the viewport. The element moves 100 pixels along the x-axis from the left
 * and its opacity changes from 0 to 1 over a duration of 1 second.
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
    gsap.from('#work-together', {
      scrollTrigger: {
        trigger: '#work-together',
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      },
      x: -100,
      opacity: 0,
      duration: .25
    });
  }

  /**
 * Scrolls smoothly to the section with the specified ID.
 * 
 * @param {string} sectionId - The ID of the section to scroll to.
 * 
 * The method retrieves the DOM element with the given ID and, if found, scrolls the element into view with a smooth scrolling behavior.
 * 
 * @returns {void}
 */
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

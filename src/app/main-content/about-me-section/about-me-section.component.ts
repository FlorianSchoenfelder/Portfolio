import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger) 

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {


  ngOnInit(): void {
    gsap.from('#work-together', {
      scrollTrigger: {
        trigger: '#work-together',
        // markers: true,
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: 1
    });
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }






}

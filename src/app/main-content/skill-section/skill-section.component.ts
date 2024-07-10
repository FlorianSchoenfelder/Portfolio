import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule],
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

  ngOnInit(): void {
    gsap.from('#headline-skill', {
      scrollTrigger: {
        trigger: '#headline-skill',
        // markers: true,
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: 1
    });
  }
}

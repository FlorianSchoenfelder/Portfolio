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

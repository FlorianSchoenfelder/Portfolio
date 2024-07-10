import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JoinProjectComponent } from './join-project/join-project.component';
import { ElpollolocoProjectComponent } from './elpolloloco-project/elpolloloco-project.component';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { PokedexProjectComponent } from './pokedex-project/pokedex-project.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule, JoinProjectComponent, ElpollolocoProjectComponent, PokedexProjectComponent],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {
  

  ngOnInit(): void {
    gsap.from('#headline-myWork', {
      scrollTrigger: {
        trigger: '#headline-myWork',
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


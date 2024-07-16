import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

  

  public myWork: { title: string; img: string; languages: string; description: string; link: string; github: string }[] = [
    {
      title: 'Join',
      img: 'join.png',
      languages: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: '',
      github: '',
    },
    {
      title: 'Pollo Loco',
      img: 'polloloco.png',
      languages: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: '',
      github: '',
    },
    {
      title: 'Pokedex',
      img: 'pokedex.png',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: '',
      github: '',
    },
  ]
  

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


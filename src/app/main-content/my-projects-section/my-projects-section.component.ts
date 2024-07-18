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
      link: 'https://join.florian-schoenfelder.de/assets/templates/index.html',
      github: 'https://github.com/FlorianSchoenfelder/Join.git',
    },
    {
      title: 'Pollo Loco',
      img: 'polloloco.png',
      languages: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: 'https://el-pollo-loco.florian-schoenfelder.de/index.html',
      github: 'https://github.com/FlorianSchoenfelder/El_Pollo_Loco.git',
    },
    {
      title: 'Pokedex',
      img: 'pokedex.png',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'https://pokedex.florian-schoenfelder.de/index.html',
      github: 'https://github.com/FlorianSchoenfelder/Pokedex.git',
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

  openGithub(link: string) {
    window.open(link, "_blank");
  }

  openProject(project: string) {
    window.open(project, "_blank");
  }
}


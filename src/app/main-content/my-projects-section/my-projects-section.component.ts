import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

translation:boolean = false;

  public myWork: { title: string; img: string; languages: string; descriptionEN: string; descriptionDE: string; link: string; github: string }[] = [
    {
      title: 'Join',
      img: 'join.png',
      languages: 'JavaScript | HTML | CSS',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDE: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      link: 'https://join.florian-schoenfelder.de/assets/templates/index.html',
      github: 'https://github.com/FlorianSchoenfelder/Join.git',
    },
    {
      title: 'Pollo Loco',
      img: 'polloloco.png',
      languages: 'JavaScript | HTML | CSS',
      descriptionEN: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionDE: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      link: 'https://el-pollo-loco.florian-schoenfelder.de/index.html',
      github: 'https://github.com/FlorianSchoenfelder/El_Pollo_Loco.git',
    },
    {
      title: 'Pokedex',
      img: 'pokedex.png',
      languages: 'JavaScript | HTML | CSS | Api',
      descriptionEN: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      descriptionDE: 'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      link: 'https://pokedex.florian-schoenfelder.de/index.html',
      github: 'https://github.com/FlorianSchoenfelder/Pokedex.git',
    },
  ]

  constructor(private translatesevice: TranslateService) {

  }


  ngOnInit(): void {


    this.translatesevice.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'de') {
        this.translation = false;
      }else if (event.lang == 'en'){
        this.translation = true;
      }
    });

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


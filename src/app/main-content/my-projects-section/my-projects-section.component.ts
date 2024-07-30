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

  translation: boolean = false;

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
  ];

  constructor(private translatesevice: TranslateService) { }

  /**
 * Initializes the component and sets up language change subscription and headline animation.
 * 
 * This method sets up a subscription to the language change event of the translation service.
 * When the language changes, it updates the `translation` property based on the current language.
 * Additionally, it calls the `headlineAnimation` method to set up the animation for the headline.
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    this.translatesevice.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'de') {
        this.translation = false;
      } else if (event.lang == 'en') {
        this.translation = true;
      }
    });
    this.headlineAnimation();
  }

  /**
 * Animates the headline with the ID 'headline-myWork' when it enters the viewport using GSAP.
 * 
 * This method sets up a GSAP animation for the element with the ID 'headline-myWork'.
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
  headlineAnimation() {
    gsap.from('#headline-myWork', {
      scrollTrigger: {
        trigger: '#headline-myWork',
        // markers: true,
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: .25
    });
  }

  /**
 * Opens the specified GitHub link in a new browser tab.
 * 
 * This method takes a URL string as a parameter and opens it in a new browser tab.
 * 
 * @param {string} link - The URL of the GitHub page to open.
 * 
 * @returns {void}
 */
  openGithub(link: string) {
    window.open(link, "_blank");
  }

  /**
 * Opens the specified project link in a new browser tab.
 * 
 * This method takes a URL string as a parameter and opens it in a new browser tab.
 * 
 * @param {string} project - The URL of the project page to open.
 * 
 * @returns {void}
 */
  openProject(project: string) {
    window.open(project, "_blank");
  }
}


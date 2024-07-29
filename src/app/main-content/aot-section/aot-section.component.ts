import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TextPlugin } from 'gsap/all';
import { gsap } from "gsap";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-aot-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './aot-section.component.html',
  styleUrl: './aot-section.component.scss'
})
export class AotSectionComponent {

  public myLinkedIn:string = 'https://www.linkedin.com/in/florian-schoenfelder-72099b232/';
  public myGithub:string = 'https://github.com/FlorianSchoenfelder';

  header = inject(HeaderComponent);
  greeting:string = 'Hallo!';
  welcome:string = 'Hallo! Ich bin Florian';

  constructor(private translateservie: TranslateService) {
  }

  

  ngOnInit(): void {

    this.welcomeAnimation();
    this.getLanguageForGreetingText();
    this.myRoleAnimation();
  }

  getLanguageForGreetingText() {
    this.translateservie.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('Language changed', event.lang);
        if (event.lang == 'de') {
        this.greeting = 'Hallo!';
        this.welcome = 'Hallo! Ich bin Florian';
        this.welcomeAnimation();
      } else {
        this.greeting = 'Hello!';
        this.welcome = 'Hello! I am Florian';
        this.welcomeAnimation();
      }
    });
  }

  welcomeAnimation() {
    gsap.from("#myName", { text: this.greeting })
    gsap.to('#myName', {
      duration: 1.5,
      text: this.welcome,
      ease: "none",
    });
  }

  myRoleAnimation() {
    setTimeout(() => {
      gsap.from("#span1", { duration: 1.5, text: "" })
      gsap.to('#span1', {
        duration: 1.5,
        text: "FRONTEND",
        ease: "none",
      });
        gsap.from("#span2", { duration: 1.5, text: "" })
      gsap.to('#span2', {
        duration: 1.5,
        text: "DEVELOPER",
        ease: "none",
      });
    }, 800);
  }

  moveTo(link:string) {
    if (link == 'linkedin') {
      window.open(this.myLinkedIn, "_blank");
    } else if (link == 'github') {
      window.open(this.myGithub, "_blank");
    } else {
      window.location.assign("mailto:info@florian-schoenfelder.de");
    }
  }

}

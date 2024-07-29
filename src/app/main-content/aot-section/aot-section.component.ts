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

  constructor(private translateservie: TranslateService) {}

  ngOnInit(): void {
    this.welcomeAnimation();
    this.getLanguageForGreetingText();
    this.myRoleAnimation();
  }

  /**
 * Subscribes to language change events and updates greeting text based on the current language.
 * 
 * The method sets up a subscription to the language change event of the translation service.
 * When the language changes, it updates the greeting and welcome text to either German or English,
 * and triggers the welcome animation.
 * 
 * @returns {void}
 */
  getLanguageForGreetingText() {
    this.translateservie.onLangChange.subscribe((event: LangChangeEvent) => {
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

  /**
 * Animates the text content of the element with the ID 'myName' using GSAP.
 * 
 * This method uses GSAP to animate the text content of the element with the ID 'myName'.
 * Initially, it sets the text to the `greeting` property. Then, it animates the text to the `welcome` property
 * over a duration of 1.5 seconds with no easing.
 * 
 * GSAP Animation Steps:
 * - `gsap.from("#myName", { text: this.greeting })`: Sets the text content to `this.greeting`.
 * - `gsap.to('#myName', { duration: 1.5, text: this.welcome, ease: "none" })`: Animates the text content to `this.welcome` over 1.5 seconds.
 * 
 * @returns {void}
 */
  welcomeAnimation() {
    gsap.from("#myName", { text: this.greeting })
    gsap.to('#myName', {
      duration: 1.5,
      text: this.welcome,
      ease: "none",
    });
  }

  /**
 * Animates the text content of elements with IDs 'span1' and 'span2' using GSAP after a delay.
 * 
 * This method uses GSAP to animate the text content of the elements with the IDs 'span1' and 'span2'.
 * After a delay of 800 milliseconds, it first sets the text content of 'span1' to an empty string and then
 * animates it to "FRONTEND" over a duration of 1.5 seconds with no easing.
 * Similarly, it sets the text content of 'span2' to an empty string and then animates it to "DEVELOPER"
 * over a duration of 1.5 seconds with no easing.
 * 
 * The sequence of GSAP animations is as follows:
 * - `gsap.from("#span1", { duration: 1.5, text: "" })`: Sets the text content of 'span1' to an empty string.
 * - `gsap.to('#span1', { duration: 1.5, text: "FRONTEND", ease: "none" })`: Animates the text content of 'span1' to "FRONTEND".
 * - `gsap.from("#span2", { duration: 1.5, text: "" })`: Sets the text content of 'span2' to an empty string.
 * - `gsap.to('#span2', { duration: 1.5, text: "DEVELOPER", ease: "none" })`: Animates the text content of 'span2' to "DEVELOPER".
 * 
 * @returns {void}
 */
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

  /**
 * Navigates to a specified link based on the input parameter.
 * 
 * This method opens a new browser tab to the user's LinkedIn or GitHub profile, 
 * or initiates an email to a specified address based on the input string.
 * 
 * @param {string} link - The link identifier that determines the navigation action. 
 *                        Accepts 'linkedin', 'github', or any other value for email.
 * 
 * Behavior:
 * - If the link is 'linkedin', it opens the LinkedIn profile in a new tab.
 * - If the link is 'github', it opens the GitHub profile in a new tab.
 * - For any other value, it opens the default email client with a pre-filled recipient address.
 * 
 * @returns {void}
 */
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

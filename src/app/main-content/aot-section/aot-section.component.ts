import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TextPlugin } from 'gsap/all';
import { gsap } from "gsap";
import { TranslateModule } from '@ngx-translate/core';
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

  constructor() {

  }

  ngOnInit(): void {
    gsap.from("#myName", { text: "Hallo!" })
    gsap.to('#myName', {
      duration: 1.5,
      text: "Hallo! Ich bin Florian",
      ease: "none",
    });
    setTimeout(() => {
      gsap.from("#span1", { duration: 1.5, text: "" })
      gsap.to('#span1', {
        duration: 1.5,
        text: "FRONTEND",
        ease: "none",
      });
      setTimeout(() => {
        gsap.from("#span2", { duration: 1.5, text: "" })
      gsap.to('#span2', {
        duration: 1.5,
        text: "DEVELOPER",
        ease: "none",
      });
      }, 1000);
    }, 1000);
  }

// if (this.header.isChecked) {
//   this.ngOnInit();
  
// }

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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-aot-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aot-section.component.html',
  styleUrl: './aot-section.component.scss'
})
export class AotSectionComponent {

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

}

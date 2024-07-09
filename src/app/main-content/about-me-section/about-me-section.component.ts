import { Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {


  ngOnInit(): void {
    // gsap.from("#work-together", { delay: 1.5, duration: 1.5, y: -150, opacity: 0 })

  }
}

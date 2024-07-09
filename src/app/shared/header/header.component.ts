import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';
import 'animate.css';
import { log } from 'console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('btn') btnElement!: ElementRef;

  burgerButton: boolean = false;
  menuOut: boolean = false;
  mainLogo: boolean = true;
  constructor() { }

  ngOnInit(): void {
    gsap.from("#navigation", { delay: 1.5, duration: 1.5, y: -150, opacity: 0 })

  }

  toggleBurgerMenu() {
    const btn = this.btnElement.nativeElement;
    if (btn.classList.contains('not-active')) {
      btn.classList.remove('not-active');
      btn.classList.add('active');
      this.burgerButton = true;
      this.menuOut = false;
      setTimeout(() => {
        this.mainLogo = false;
      }, 1000);


    } else {
      this.menuOut = true;
      btn.classList.remove('active');
      btn.classList.add('not-active');
      setTimeout(() => {
        this.burgerButton = false;
        this.mainLogo = true;

      }, 350);
    }
  }




}

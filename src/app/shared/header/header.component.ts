import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('btn') btnElement!: ElementRef;
  burgerButton:boolean = false;
  constructor() {}
  
  ngOnInit(): void {
    // gsap.from("#navigation", {delay: 3, duration: 1.5, y: -150, opacity: 0})
    
  }

toggleBurgerMenu() {
  const btn = this.btnElement.nativeElement;
  if (btn.classList.contains('not-active')) {
    this.burgerButton = true;
    btn.classList.remove('not-active');
    btn.classList.add('active');
  } else {
    this.burgerButton = false;
    btn.classList.remove('active');
    btn.classList.add('not-active');
  }
}


 

}

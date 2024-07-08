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

  burgerButton:boolean = false;
  menuOut:boolean = false;
  constructor() {}
  
  ngOnInit(): void {
    gsap.from("#navigation", {delay: 3, duration: 1.5, y: -150, opacity: 0})
    
  }

toggleBurgerMenu() {
  const btn = this.btnElement.nativeElement;
  if (btn.classList.contains('not-active')) {
    btn.classList.remove('not-active');
    btn.classList.add('active');
    this.burgerButton = true;
    this.menuOut = false;
    console.log(this.burgerButton);
    console.log(this.menuOut);
  } else {
    
    this.menuOut = true;
    console.log(this.burgerButton);
    console.log(this.menuOut);
    btn.classList.remove('active');
    btn.classList.add('not-active');
    setTimeout(() => {
      this.burgerButton = false;
    }, 500);
  }
  
  
}


 

}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Injectable, ViewChild } from '@angular/core';
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';
import 'animate.css';
import { gsap } from "gsap";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileNavigationComponent, TranslateModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  

  constructor(private translateService: TranslateService) {}

  @ViewChild('btn') btnElement!: ElementRef;

  burgerButton: boolean = false;
  menuOut: boolean = false;
  mainLogo: boolean = true;
  isChecked: boolean = false;

  checkValue(): void {
    if (!this.isChecked) {
      this.translateService.use('en'); 
    } else if (this.isChecked) {
      this.translateService.use('de');
    }
  }



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

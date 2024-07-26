import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Injectable, ViewChild } from '@angular/core';
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';
import 'animate.css';
import { gsap } from "gsap";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileNavigationComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translateService: TranslateService) {}

  @ViewChild('btn') btnElement!: ElementRef;

  burgerButton: boolean = false;
  menuOut: boolean = false;
  mainLogo: boolean = true;

  toggleLanguage(event: Event): void {
    let defaultLanguage = this.translateService.getDefaultLang();
    console.log('Default Language:', defaultLanguage);
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      console.log(defaultLanguage, 'yes');
      
      defaultLanguage == 'de';
    } else {
      defaultLanguage == 'en';
    }
  }



  ngOnInit(): void {
    gsap.from("#navigation", { delay: 1.5, duration: 1.5, y: -150, opacity: 0 })
    const defaultLanguage = this.translateService.getDefaultLang();
    console.log('Default Language:', defaultLanguage);
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

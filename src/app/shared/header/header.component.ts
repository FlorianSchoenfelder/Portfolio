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
  
  @ViewChild('btn') btnElement!: ElementRef;

  burgerButton: boolean = false;
  menuOut: boolean = false;
  mainLogo: boolean = true;
  isChecked: boolean = false;

  constructor(private translateService: TranslateService) {}

  /**
 * Checks the state of the `isChecked` property and changes the language used by the translation service.
 * 
 * If `isChecked` is false, the method sets the translation service to use English ('en'). 
 * If `isChecked` is true, it sets the translation service to use German ('de').
 * 
 * @returns {void}
 */
  checkValue(): void {
    if (!this.isChecked) {
      this.translateService.use('en'); 
    } else if (this.isChecked) {
      this.translateService.use('de');
    }
  }

  /**
 * Initializes the component and sets up an animation for the navigation element using GSAP.
 * 
 * This method uses GSAP to animate the element with the ID 'navigation'. The animation starts after a delay of 1.5 seconds,
 * with the element moving vertically from -150 pixels and fading in from an opacity of 0 over a duration of 1.5 seconds.
 * 
 * GSAP Animation Properties:
 * - `delay`: The delay before the animation starts (1.5 seconds).
 * - `duration`: The duration of the animation (1.5 seconds).
 * - `y`: The vertical offset for the animation (-150 pixels).
 * - `opacity`: The starting opacity of the element (0, fully transparent).
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    gsap.from("#navigation", { delay: 1.5, duration: 1.5, y: -150, opacity: 0 })
  }

  /**
 * Toggles the state of the burger menu between active and not active.
 * 
 * This method checks the current state of the burger menu button. If the button has the class 'not-active', 
 * it calls the `showMenu` method to activate the menu. If the button has the class 'active', 
 * it calls the `hideMenu` method to deactivate the menu.
 * 
 * @returns {void}
 */
  toggleBurgerMenu() {
    const btn = this.btnElement.nativeElement;
    if (btn.classList.contains('not-active')) {
      this.showMenu();
    } else {
     this.hideMenu();
    }
  }

  /**
 * Displays the burger menu and updates the button state to 'active'.
 * 
 * This method removes the 'not-active' class and adds the 'active' class to the burger menu button. 
 * It sets `burgerButton` to true and `menuOut` to false. Additionally, it hides the main logo after a delay of 1 second.
 * 
 * @returns {void}
 */
  showMenu() {
    const btn = this.btnElement.nativeElement;
    btn.classList.remove('not-active');
      btn.classList.add('active');
      this.burgerButton = true;
      this.menuOut = false;
      setTimeout(() => {
        this.mainLogo = false;
      }, 1000);
  }

  /**
 * Hides the burger menu and updates the button state to 'not-active'.
 * 
 * This method sets `menuOut` to true and updates the burger menu button by removing the 'active' class
 * and adding the 'not-active' class. It hides the burger button and shows the main logo after a delay of 350 milliseconds.
 * 
 * @returns {void}
 */
  hideMenu() {
    const btn = this.btnElement.nativeElement;
    this.menuOut = true;
    btn.classList.remove('active');
    btn.classList.add('not-active');
    setTimeout(() => {
      this.burgerButton = false;
      this.mainLogo = true;

    }, 350);
  }

}

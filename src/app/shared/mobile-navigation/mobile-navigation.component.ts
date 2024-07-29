import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {

  translation: boolean = false;

  constructor(private test: HeaderComponent) { }

  /**
 * Closes the navigation menu by toggling its state.
 * 
 * This method calls the `toggleBurgerMenu` method from the `test` service or component to close
 * the navigation menu if it is currently open.
 * 
 * @returns {void}
 */
  closeNav() {
    this.test.toggleBurgerMenu();
  }

  /**
 * Handles navigation with a delay after closing the navigation menu.
 * 
 * This method prevents the default action of the event (typically used for anchor link clicks), 
 * closes the navigation menu by calling `closeNav`, and then navigates to the target URL 
 * after a delay of 400 milliseconds.
 * 
 * @param {Event} event - The event object associated with the navigation action, such as a click event.
 * 
 * @returns {void}
 */
  delayedNavigation(event: Event) {
    event.preventDefault();
    this.closeNav();
    setTimeout(() => {
      const target = (event.target as HTMLAnchorElement).getAttribute('href');
      if (target) {
        window.location.href = target;
      }
    }, 400);
  }
}

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


  constructor(private test: HeaderComponent) {

  }

  closeNav() {
    this.test.toggleBurgerMenu();
  }


  delayedNavigation(event: Event) {
    event.preventDefault(); // Verhindert das sofortige Navigieren

    this.closeNav();

    setTimeout(() => {
      const target = (event.target as HTMLAnchorElement).getAttribute('href');
      if (target) {
        window.location.href = target; // Navigiert nach einer Sekunde
      }
    }, 400); // 1 Sekunde Verzögerung
  }
}

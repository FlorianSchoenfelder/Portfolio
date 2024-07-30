import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  translation: boolean = false;

  constructor(private translatesevice: TranslateService) { }

  /**
 * Initializes the component and sets up a subscription to handle language changes.
 * 
 * This method subscribes to the `onLangChange` event of the translation service. When the language changes,
 * it updates the `translation` property based on the current language. If the language is German ('de'), 
 * the `translation` property is set to false. If the language is English ('en'), the `translation` property is set to true.
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setLanguage();
    this.translatesevice.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'de') {
        this.translation = false;
      } else if (event.lang == 'en') {
        this.translation = true;
      }
    });
  }

  setLanguage() {
    let language = this.translatesevice.currentLang
    console.log(language);
    if (language == 'en') {
      this.translation = true;
    }
  }
}

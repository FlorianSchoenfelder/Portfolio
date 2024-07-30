import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  translation: boolean = false;

  constructor(private translatesevice: TranslateService, private route: ActivatedRoute) {}

  /**
 * Initializes the component and sets up a subscription to the language change event.
 * 
 * @ngOnInit
 * Sets the `translation` property based on the current language.
 * If the language is 'de' (German), `translation` is set to false.
 * If the language is 'en' (English), `translation` is set to true.
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setLanguage();
    this.translatesevice.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'de') {
        this.translation = false;
      }else if (event.lang == 'en'){
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

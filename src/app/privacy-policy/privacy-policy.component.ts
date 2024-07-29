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

  constructor(private translatesevice: TranslateService) {

  }

  ngOnInit(): void {


    this.translatesevice.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'de') {
        this.translation = false;
      }else if (event.lang == 'en'){
        this.translation = true;
      }
    });
  }

}

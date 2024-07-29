import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

  isChecked: boolean = false;
  isSubmitted: boolean = false
  isInputFocused: boolean = false;

  


  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false;

  post = {
    endPoint: 'https://florian-schoenfelder.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isSubmitted = true;
    // console.log(ngForm)
    
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            alert(response)
            this.contactData.name = '';
            this.contactData.email = '';
            this.resetForm(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      this.resetForm(ngForm);
      this.isSubmitted = false;
      alert('Abgeschickt');
    }
  }

  resetForm(ngForm: NgForm) {
    this.contactData.name = '';
    this.contactData.email = '';
    ngForm.resetForm();
  }

}

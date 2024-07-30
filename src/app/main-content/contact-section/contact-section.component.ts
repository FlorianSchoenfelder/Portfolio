import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap";
import 'animate.css';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { HeaderComponent } from '../../shared/header/header.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

  isChecked: boolean = false;
  isSubmitted: boolean = false
  isInputFocused: boolean = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

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



  ngOnInit(): void {
    this.headlineAnimation();
  }

  /**
 * Handles the submission of a form.
 * 
 * This method sets the `isSubmitted` flag to true, then checks if the form has been submitted, 
 * is valid, and whether the `mailTest` flag is false. If all conditions are met, 
 * it sends a POST request with the contact data. If the `mailTest` flag is true, 
 * it resets the form and alerts the user.
 * 
 * @param {NgForm} ngForm - The form to be submitted.
 * 
 * Behavior:
 * - If the form is submitted, valid, and `mailTest` is false:
 *   - Sends a POST request with the contact data.
 *   - On success, alerts the response, clears the contact data, and resets the form.
 *   - On error, logs the error to the console.
 *   - On completion, logs a completion message to the console.
 * - If the form is submitted, valid, and `mailTest` is true:
 *   - Resets the form.
 *   - Sets `isSubmitted` to false.
 *   - Alerts the user that the form has been submitted.
 * 
 * @returns {void}
 */
  onSubmit(ngForm: NgForm) {
    this.isSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // this.successMessage = true;
            this.contactData.name = '';
            this.contactData.email = '';
            this.resetForm(ngForm);
            setTimeout(() => {
              this.isSubmitted = false;
            }, 1000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetForm(ngForm);
      setTimeout(() => {
        this.isSubmitted = false;
      }, 1000);
    }
  }

  /**
 * Scrolls smoothly to the section with the specified ID.
 * 
 * This method retrieves the DOM element with the given ID and, if found, 
 * scrolls the element into view with a smooth scrolling behavior.
 * 
 * @param {string} sectionId - The ID of the section to scroll to.
 * 
 * @returns {void}
 */
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
 * Resets the contact form data and the form itself.
 * 
 * This method clears the `name` and `email` fields in the `contactData` object
 * and resets the Angular form to its initial state.
 * 
 * @param {NgForm} ngForm - The Angular form to be reset.
 * 
 * @returns {void}
 */
  resetForm(ngForm: NgForm) {
    this.contactData.name = '';
    this.contactData.email = '';
    ngForm.resetForm();
  }


  headlineAnimation() {
    gsap.from('#headline_contact', {
      scrollTrigger: {
        trigger: '#headline_contact',
        start: 'top bottom',
        toggleActions: 'restart none restart none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: .25
    });
  }

}

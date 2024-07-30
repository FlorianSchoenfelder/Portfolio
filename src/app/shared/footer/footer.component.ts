import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public myLinkedIn: string = 'https://www.linkedin.com/in/florian-schoenfelder-72099b232/';
  public myGithub: string = 'https://github.com/FlorianSchoenfelder';
  

  /**
   * Navigates to a specified link based on the input parameter.
   * 
   * This method opens a new browser tab to the user's LinkedIn or GitHub profile,
   * or initiates an email to a specified address based on the input string.
   * 
   * @param {string} link - The link identifier that determines the navigation action.
   *                        Accepts 'linkedin', 'github', or any other value for email.
   * 
   * Behavior:
   * - If the link is 'linkedin', it opens the LinkedIn profile in a new tab.
   * - If the link is 'github', it opens the GitHub profile in a new tab.
   * - For any other value, it opens the default email client with a pre-filled recipient address.
   * 
   * @returns {void}
   */
  moveTo(link: string) {
    if (link == 'linkedin') {
      window.open(this.myLinkedIn, "_blank");
    } else if (link == 'github') {
      window.open(this.myGithub, "_blank");
    } else {
      window.location.assign("mailto:info@florian-schoenfelder.de");
    }
  }
}

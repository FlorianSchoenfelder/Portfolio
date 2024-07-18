import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  sendMessage() {
    console.log(this.contactData);
    
  }

}

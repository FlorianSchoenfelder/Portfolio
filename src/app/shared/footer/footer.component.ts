import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  public myLinkedIn:string = 'https://www.linkedin.com/in/florian-schoenfelder-72099b232/';
  public myGithub:string = 'https://github.com/FlorianSchoenfelder';


  moveTo(link:string) {
    if (link == 'linkedin') {
      window.open(this.myLinkedIn, "_blank");
    } else if (link == 'github') {
      window.open(this.myGithub, "_blank");
    } else {
      window.location.assign("mailto:info@florian-schoenfelder.de");
    }
  }
}

import { Component } from '@angular/core';
import { AotSectionComponent } from './aot-section/aot-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AotSectionComponent, AboutMeSectionComponent, SkillSectionComponent, MyProjectsSectionComponent, ContactSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

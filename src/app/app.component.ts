import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceCarouselComponent } from './components/experience-carousel/experience-carousel.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
  aboutText,
  certificates,
  educationItems,
  experiences,
  knowledgeItems,
  profile,
  stacks
} from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CertificatesComponent,
    EducationComponent,
    ExperienceCarouselComponent,
    KnowledgeComponent,
    NgFor,
    SectionHeadingComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly profile = profile;
  readonly stacks = stacks;
  readonly aboutText = aboutText;
  readonly knowledgeItems = knowledgeItems;
  readonly experiences = experiences;
  readonly educationItems = educationItems;
  readonly certificates = certificates;
}

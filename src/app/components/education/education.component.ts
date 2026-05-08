import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Education } from '../../data/portfolio.data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, SectionHeadingComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input({ required: true }) items: Education[] = [];
}

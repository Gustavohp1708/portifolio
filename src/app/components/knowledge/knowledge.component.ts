import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { KnowledgeItem } from '../../data/portfolio.data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [NgFor, SectionHeadingComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  @Input({ required: true }) items: KnowledgeItem[] = [];
}

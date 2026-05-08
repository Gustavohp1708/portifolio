import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { Experience } from '../../data/portfolio.data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-experience-carousel',
  standalone: true,
  imports: [NgFor, SectionHeadingComponent],
  templateUrl: './experience-carousel.component.html',
  styleUrl: './experience-carousel.component.scss'
})
export class ExperienceCarouselComponent {
  @Input({ required: true }) experiences: Experience[] = [];
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  scroll(direction: 'previous' | 'next'): void {
    const element = this.carousel.nativeElement;
    const offset = element.clientWidth * 0.82;

    element.scrollBy({
      left: direction === 'next' ? offset : -offset,
      behavior: 'smooth'
    });
  }
}

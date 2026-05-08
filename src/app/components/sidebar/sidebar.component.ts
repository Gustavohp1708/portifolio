import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ContactLink } from '../../data/portfolio.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) photoInitials = '';
  @Input() photoUrl = '';
  @Input({ required: true }) contact: ContactLink[] = [];
  @Input({ required: true }) stacks: string[] = [];
}

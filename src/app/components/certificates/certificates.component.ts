import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Certificate } from '../../data/portfolio.data';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  @Input({ required: true }) certificates: Certificate[] = [];

  isGalleryOpen = false;
  selectedCertificate: Certificate | null = null;

  openGallery(): void {
    this.isGalleryOpen = true;
  }

  closeGallery(): void {
    this.isGalleryOpen = false;
    this.selectedCertificate = null;
  }

  selectCertificate(certificate: Certificate): void {
    this.selectedCertificate = certificate;
  }

  closeCertificate(): void {
    this.selectedCertificate = null;
  }
}

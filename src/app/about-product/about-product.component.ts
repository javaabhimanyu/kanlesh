import { Component } from '@angular/core';
import { HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css'],
})
export class AboutProductComponent implements OnInit {
  icons = [
    'ri-trophy-line',
    'ri-money-dollar-box-line',
    'ri-wallet-3-line',
    'ri-coin-line',
    'ri-hand-coin-line',
  ];

  Reppoo = [
    'ri-window-line',
    'ri-cursor-line',
    'ri-pie-chart-line',
    'ri-sparkling-2-line',
    'ri-bar-chart-2-line',
  ];

  floatingTags = [
    { title: 'Our Guiding Principle', content: 'Customer First' },
  ];

  activeCard: string = 'loya'; // Default card to show

  showCard(card: string): void {
    this.activeCard = card;
  }
  isLargeScreen: boolean = true;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth > 630;
  }
}

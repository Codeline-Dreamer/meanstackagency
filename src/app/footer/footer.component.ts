import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from '../footer-menu/footer-menu.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterMenuComponent],
  template: ` <app-footer-menu></app-footer-menu> `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}

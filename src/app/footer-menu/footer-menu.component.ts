import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Footer -->
    <footer class="bg-light py-5">
      <div class="container">
        <div class="small text-center text-muted">
          Copyright &copy; 2024 - Crawling Bytes Technologies
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer-menu.component.css',
})
export class FooterMenuComponent {}

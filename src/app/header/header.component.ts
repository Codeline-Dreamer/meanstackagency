import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MainMenuComponent],
  template: `
    <section>
      <app-main-menu></app-main-menu>
    </section>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

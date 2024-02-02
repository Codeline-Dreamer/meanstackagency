import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { Menu2Component } from '../menu2/menu2.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MainMenuComponent, Menu2Component],
  template: `
    <section>
      <!-- <app-main-menu></app-main-menu> -->
      <app-menu2></app-menu2>
    </section>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

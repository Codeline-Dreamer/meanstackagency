import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Navigation -->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" routerLink="/">Crawling Bytes</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto my-2 my-lg-0">
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                routerLink="/about"
                routerLinkActive="active"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                routerLink="/providers"
                routerLinkActive="active"
                >Service Providers</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                routerLink="/contact"
                routerLinkActive="active"
                >Contact</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                routerLink="/login"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                routerLink="/register"
                routerLinkActive="active"
                >Register</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './menu2.component.css',
})
export class Menu2Component {}

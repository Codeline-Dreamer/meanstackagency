import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  template: `
    <section>
      <div class="container">
        <header>
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src="/assets/logo/CrawlingBytes-Light-trans.svg"
                  width="250"
                  height="auto"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      routerLink="/"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="projects">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </section>
  `,
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}

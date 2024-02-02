import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- About Section -->
    <section class="page-section bg-primary" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">
              A Guide to Solving Web Development Problems
            </h2>
            <hr class="divider light my-4" />
            <p class="text-white-50 mb-4">
              This is mainly about how to solve technical problems that arise
              from using front or back end technologies to make web pages or web
              apps but some of these steps will be applicable to solving
              technical problems in general.
            </p>
            <a
              class="btn btn-light btn-xl js-scroll-trigger"
              routerLink="/providers"
              routerLinkActive="active"
              >Get Started!</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}

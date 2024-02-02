import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <div class="container col-xxl-12 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="/assets/landing-1-hero.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="420"
              height="auto"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              We create stunning websites and apps
            </h1>
            <p class="lead">
              Welcome to our web agency, where innovation meets expertise in
              full-stack web development. We specialize in crafting bespoke
              applications that empower your business, ensuring a seamless,
              dynamic online presence. Partner with us for unparalleled service
              and transformative results.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}

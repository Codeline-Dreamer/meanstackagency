import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule, RouterModule, AppComponent],
  template: `
    <!-- Masthead -->
    <header class="masthead">
      <div class="container h-100">
        <div
          class="row h-100 align-items-center justify-content-center text-center"
        >
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">
              MEAN Stack Ageny
            </h1>
            <hr class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5">
              This is mainly about how to solve technical problems that arise
              from using front or back end technologies to make web pages or web
              apps but some of these steps will be applicable to solving
              technical problems in general.
            </p>
            <a
              class="btn btn-primary btn-xl js-scroll-trigger"
              routerLink="/about"
              routerLinkActive="active"
              >Find Out More</a
            >
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrl: './home1.component.css',
})
export class Home1Component {}

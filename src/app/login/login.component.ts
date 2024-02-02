import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Login Section -->
    <section class="page-section" id="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Login</h2>
            <hr class="divider my-4" />
          </div>
        </div>
        <div class="row justify-content-center">
          <form>
            <div class="form-group">
              <label for="inputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="inputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="inputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="inputPassword1"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
            <hr class="divider my-4" />
            <div class="text-center">
              <a
                class="small"
                routerLink="/forgot-password"
                routerLinkActive="active"
                >Forgot Password?</a
              >
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {}

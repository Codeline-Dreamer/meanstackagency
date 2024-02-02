import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Register Section -->
    <section class="page-section" id="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Create an Account!</h2>
            <hr class="divider my-4" />
          </div>
        </div>
        <div class="row justify-content-center">
          <!-- Nested Row within Card Body -->
          <div class="row o-hidden border-0">
            <div class="col-lg-12">
              <div class="p-5">
                <form class="user">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        name="firstname"
                        id="inputFirstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        name="lastname"
                        id="inputLastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      name="email"
                      id="inputEmail"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        name="password"
                        id="inputPassword"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        name="repeatPassword"
                        id="inputRepeatPassword"
                        placeholder="Repeat Password"
                        required
                      />
                    </div>
                  </div>
                  <button class="btn btn-primary btn-block" type="submit">
                    Register Account
                  </button>
                  <hr />
                  <a routerLink="#" class="btn btn-google btn-user btn-block">
                    <i class="fab fa-google fa-fw"></i> Register with Google
                  </a>
                  <a routerLink="#" class="btn btn-facebook btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> Register with
                    Facebook
                  </a>
                </form>
                <hr class="divider my-4" />

                <div class="text-center">
                  <a class="small" routerLink="/login" routerLinkActive="active"
                    >Already have an account? Login!</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './register.component.css',
})
export class RegisterComponent {}

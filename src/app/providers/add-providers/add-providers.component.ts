import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ProvidersComponent } from '../providers.component';
import { FormGroup, FormControl } from '@angular/forms';
import { providers } from '../../models/providers.data.';
import { ProviderClass } from '../../models/providers.class';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-providers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ProvidersComponent,
    FormsModule,
  ],
  template: `
    <!-- Add Provider Section -->
    <section class="page-section" id="add-provider-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Add a New Provider</h2>
            <hr class="divider my-4" />
          </div>
        </div>
        <div class="row justify-content-center">
          <!-- Nested Row within Card Body -->
          <div class="row o-hidden border-0">
            <div class="col-lg-12">
              <h1 class="mt-0 text-success" *ngIf="submitted">
                Added successly!
              </h1>
              <form
                [formGroup]="providersForm"
                class="user"
                *ngIf="!submitted"
                (ngSubmit)="handleSubmit()"
              >
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <label for="inputFirstName"
                      >First Name
                      <!-- Required Indicator -->
                      <span
                        *ngIf="providersForm.controls['firstname'].touched && providersForm.controls['firstname'].errors?.['required']"
                        class="text-danger"
                      >
                        *Required
                      </span>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      formControlName="firstname"
                      id="inputFirstName"
                    />
                    <!-- Validation Feedback for Min Length -->
                    <div
                      *ngIf="providersForm.controls['firstname'].touched && providersForm.controls['firstname'].errors?.['minlength']"
                      class="text-danger"
                    >
                      Minimum 2 characters
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="inputLastName"
                      >Last Name
                      <!-- Required Indicator -->
                      <span
                        *ngIf="providersForm.controls['lastname'].touched && providersForm.controls['lastname'].errors?.['required']"
                        class="text-danger"
                      >
                        *Required
                      </span>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      formControlName="lastname"
                    />
                    <!-- Validation Feedback for Min Length -->
                    <div
                      *ngIf="providersForm.controls['lastname'].touched && providersForm.controls['lastname'].errors?.['minlength']"
                      class="text-danger"
                    >
                      Minimum 2 characters
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPosition"
                    >Position
                    <!-- Required Indicator -->
                    <span
                      *ngIf="providersForm.controls['position'].touched && providersForm.controls['position'].errors?.['required']"
                      class="text-danger"
                    >
                      *Required
                    </span>
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    formControlName="position"
                  />
                  <!-- Validation Feedback for Min Length -->
                  <div
                    *ngIf="providersForm.controls['position'].touched && providersForm.controls['position'].errors?.['minlength']"
                    class="text-danger"
                  >
                    Minimum 2 characters
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <label for="inputEmail"
                      >Email
                      <!-- Required Indicator -->
                      <span
                        *ngIf="providersForm.controls['email'].touched && providersForm.controls['email'].errors?.['required']"
                        class="text-danger"
                      >
                        *Required
                      </span></label
                    >
                    <input
                      type="email"
                      class="form-control form-control-user"
                      formControlName="email"
                    />
                    <!-- Validation Feedback for Min Length -->
                    <div
                      *ngIf="providersForm.controls['email'].touched && providersForm.controls['email'].errors?.['email']"
                      class="text-danger"
                    >
                      Please enter a valid email.
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <label for="inputPhone"
                      >Phone
                      <!-- Required Indicator -->
                      <span
                        *ngIf="providersForm.controls['phone'].touched && providersForm.controls['phone'].errors?.['required']"
                        class="text-danger"
                      >
                        *Required
                      </span></label
                    >
                    <input
                      type="phone"
                      class="form-control form-control-user"
                      formControlName="phone"
                    />
                    <!-- Validation Feedback for Min Length -->
                    <div
                      *ngIf="providersForm.controls['phone'].touched && providersForm.controls['phone'].errors?.['pattern']"
                      class="text-danger"
                    >
                      Please enter a valid phone number (e.g., 555-123-4567).
                    </div>
                  </div>
                </div>
                <hr class="divider my-4" />
                <div class="form-group">
                  <label for="inputCompanyName">Company</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    formControlName="company_name"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    formControlName="address"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    class="form-control"
                    formControlName="address2"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="city"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="state"
                    />
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZipCode">Zip Code</label>
                    <input
                      type="text"
                      class="form-control"
                      maxlength="5"
                      formControlName="postal_code"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <label for="inputDescription">Description</label>
                    <textarea
                      class="form-control form-control-user"
                      formControlName="description"
                    ></textarea>
                  </div>
                  <div class="col-sm-6">
                    <label for="inputTagLine">Tag Line</label>
                    <textarea
                      class="form-control form-control-user"
                      formControlName="tagline"
                    ></textarea>
                  </div>
                </div>
                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  [disabled]="providersForm.invalid"
                >
                  Add Provider
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './add-providers.component.css',
})
export class AddProvidersComponent implements OnInit {
  submitted = false;
  provider = new ProviderClass();
  providersForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname: new FormControl('Jatinder', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl('Singh', [
        Validators.required,
        Validators.minLength(2),
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$'),
      ]),
      company_name: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      description: new FormControl(),
      tagline: new FormControl(),
    });
  }

  handleSubmit() {
    console.log(this.providersForm.value);
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (providers.findIndex((el) => el.id == newId) == -1) {
        break;
      }
    }
    let p = this.providersForm.value;
    this.provider.id = newId;
    this.provider.firstname = p.firstname;
    this.provider.lastname = p.lastname;
    this.provider.position = p.position;
    this.provider.company = {
      company_name: p.company_name,
      address: p.address,
      address2: p.address2,
      city: p.city,
      state: p.state,
      postal_code: p.postal_code,
      phone: p.phone,
      email: p.email,
      description: p.description,
      tagline: p.tagline,
    };
    providers.push(this.provider);
    this.submitted = true;
  }
}

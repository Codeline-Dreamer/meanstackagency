import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Contact Section -->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Let's Get In Touch!</h2>
            <hr class="divider my-4" />
            <p class="text-muted mb-5">
              Ready to start your next project with us? Give us a call or send
              us an email and we will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <form #contactForm="ngForm" (ngSubmit)="handleSubmit(contactForm)">
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="validationDefault01">First name</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstname"
                  id="validationDefault01"
                  required
                  [value]=""
                  ngModel
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="validationDefault02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastname"
                  id="validationDefault02"
                  required
                  [value]=""
                  ngModel
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="validationDefault03">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="validationDefault03"
                  required
                  [value]=""
                  ngModel
                />
              </div>
            </div>
            <div class="form-group">
              <label for="messageFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                name="message"
                id="messageFormControlTextarea1"
                rows="3"
                required
                [value]=""
                ngModel
              ></textarea>
            </div>
            <button class="btn btn-primary btn-block" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  handleSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
    console.log(contactForm.value.message);
  }
}

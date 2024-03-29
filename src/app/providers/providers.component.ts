import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { providers } from '../models/providers.data.';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Provider List Section -->
    <section class="page-section" id="provider-list">
      <div class="container">
        <h2 class="text-center mt-0">At Your Service</h2>
        <hr class="divider my-4" />
        <div class="table-responsive">
          <a
            routerLink="/providers/add-provider"
            class="btn btn-primary my-2"
            routerLinkActive="active"
            >Add New Provider</a
          >

          <table class="table table-hover table-bordered">
            <thead class="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Position</th>
                <th scope="col">Company</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let provider of providers">
                <tr>
                  <td>{{ provider.id }}</td>
                  <td>{{ provider.firstname }}</td>
                  <td>{{ provider.lastname }}</td>
                  <td>{{ provider.position }}</td>
                  <td>{{ provider.company.company_name }}</td>
                  <td scope="row">
                    <a
                      href="/providers/details/{{ provider.id }}"
                      class="btn btn-info btn-sm mx-1"
                      >More info...</a
                    >
                    <a
                      href="/providers/edit/{{ provider.id }}"
                      class="btn btn-secondary btn-sm mx-1"
                      >Edit</a
                    >
                    <a
                      href="#myModal{{ provider.id }}"
                      class="btn btn-danger btn-sm mx-1"
                      data-toggle="modal"
                      >Delete</a
                    >
                  </td>
                </tr>

                <!-- Modal Window - Confirmation -->
                <div id="myModal{{ provider.id }}" class="modal fade">
                  <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <div class="icon-box">
                          <i class="material-icons">&#xE5CD;</i>
                        </div>
                        <h4 class="modal-title">Are you sure?</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Do you really want to delete these records? This
                          process cannot be undone.
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-info btn-md"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <div class="d-flex justify-content-center">
                          <a
                            href="/providers/delete/{{ provider.id }}"
                            type="button"
                            class="btn btn-danger btn-md"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-container>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  styleUrl: './providers.component.css',
})
export class ProvidersComponent {
  providers = providers;
}

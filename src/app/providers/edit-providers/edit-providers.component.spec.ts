import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvidersComponent } from './edit-providers.component';

describe('EditProvidersComponent', () => {
  let component: EditProvidersComponent;
  let fixture: ComponentFixture<EditProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

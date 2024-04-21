import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsoleButtonComponent } from './admin-console-button.component';

describe('AdminConsoleButtonComponent', () => {
  let component: AdminConsoleButtonComponent;
  let fixture: ComponentFixture<AdminConsoleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConsoleButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminConsoleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

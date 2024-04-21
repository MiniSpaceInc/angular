import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingUnitFormComponent } from './organizing-unit-form.component';

describe('OrganizingUnitFormComponent', () => {
  let component: OrganizingUnitFormComponent;
  let fixture: ComponentFixture<OrganizingUnitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizingUnitFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

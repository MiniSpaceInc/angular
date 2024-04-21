import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingUnitsListComponent } from './organizing-units-list.component';

describe('OrganizingUnitsListComponent', () => {
  let component: OrganizingUnitsListComponent;
  let fixture: ComponentFixture<OrganizingUnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizingUnitsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingUnitsTabComponent } from './organizing-units-tab.component';

describe('OrganizingUnitsTabComponent', () => {
  let component: OrganizingUnitsTabComponent;
  let fixture: ComponentFixture<OrganizingUnitsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizingUnitsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingUnitsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

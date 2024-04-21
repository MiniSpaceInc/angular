import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrganizingUnitsDialogComponent } from './users-organizing-units-dialog.component';

describe('UsersOrganizingUnitsDialogComponent', () => {
  let component: UsersOrganizingUnitsDialogComponent;
  let fixture: ComponentFixture<UsersOrganizingUnitsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersOrganizingUnitsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersOrganizingUnitsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportsTabComponent } from './user-reports-tab.component';

describe('UserReportsTabComponent', () => {
  let component: UserReportsTabComponent;
  let fixture: ComponentFixture<UserReportsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReportsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserReportsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

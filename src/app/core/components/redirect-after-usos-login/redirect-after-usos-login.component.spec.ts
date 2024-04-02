import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAfterUsosLoginComponent } from './redirect-after-usos-login.component';

describe('RedirectAfterUsosLoginComponent', () => {
  let component: RedirectAfterUsosLoginComponent;
  let fixture: ComponentFixture<RedirectAfterUsosLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectAfterUsosLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedirectAfterUsosLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

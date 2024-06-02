import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineComponent } from './accept-decline.component';

describe('AcceptDeclineComponent', () => {
  let component: AcceptDeclineComponent;
  let fixture: ComponentFixture<AcceptDeclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptDeclineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

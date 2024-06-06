import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSearchComponent } from './reports-search.component';

describe('ReportsSearchComponent', () => {
  let component: ReportsSearchComponent;
  let fixture: ComponentFixture<ReportsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

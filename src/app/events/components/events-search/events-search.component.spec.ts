import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchComponentComponent } from './events-search.component';

describe('EventsSearchComponentComponent', () => {
  let component: EventsSearchComponentComponent;
  let fixture: ComponentFixture<EventsSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSearchComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

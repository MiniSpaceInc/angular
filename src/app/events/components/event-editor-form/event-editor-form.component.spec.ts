import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditorFormComponent } from './event-editor-form.component';

describe('EventEditorFormComponent', () => {
  let component: EventEditorFormComponent;
  let fixture: ComponentFixture<EventEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

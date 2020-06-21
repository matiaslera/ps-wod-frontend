import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAnswerComponent } from './job-answer.component';

describe('JobAnswerComponent', () => {
  let component: JobAnswerComponent;
  let fixture: ComponentFixture<JobAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

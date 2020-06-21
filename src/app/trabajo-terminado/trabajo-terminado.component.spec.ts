import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoTerminadoComponent } from './trabajo-terminado.component';

describe('TrabajoTerminadoComponent', () => {
  let component: TrabajoTerminadoComponent;
  let fixture: ComponentFixture<TrabajoTerminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoTerminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoTerminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

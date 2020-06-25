import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoContratadoComponent } from './trabajo-contratado.component';

describe('TrabajoContratadoComponent', () => {
  let component: TrabajoContratadoComponent;
  let fixture: ComponentFixture<TrabajoContratadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoContratadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoContratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

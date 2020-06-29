import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPendienteComponent } from './trabajo-pendiente.component';

describe('TrabajoPendienteComponent', () => {
  let component: TrabajoPendienteComponent;
  let fixture: ComponentFixture<TrabajoPendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoPendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresupuestoComponent } from './add-presupuesto.component';

describe('AddPresupuestoComponent', () => {
  let component: AddPresupuestoComponent;
  let fixture: ComponentFixture<AddPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoErroresComponent } from './empleado-errores.component';

describe('EmpleadoErroresComponent', () => {
  let component: EmpleadoErroresComponent;
  let fixture: ComponentFixture<EmpleadoErroresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoErroresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
